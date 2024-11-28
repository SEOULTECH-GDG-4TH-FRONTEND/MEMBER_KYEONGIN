import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logout } from "../assets/images/Logout.svg";
import { ReactComponent as Profile } from "../assets/images/Profile.svg";
import { useAuth } from "../context/AuthContext";
import { logout } from "../apis/user";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between; /* 좌우로 배치 */
  align-items: center; /* 세로 중앙 정렬 */
  padding: 1rem 2rem; /* 좌우 패딩 추가 */
  background-color: #ffffff;
  color: #373737;
  box-shadow: 0 4px 6.6px rgba(0, 0, 0, 0.1);
`;

const Brand = styled.div`
  flex: 1; /* 중앙 정렬을 위해 flexbox 공간 차지 */
  display: flex;
  justify-content: center; /* 로고 중앙 정렬 */

  a img {
    width: 100px; /* 로고 크기 조정 */
    height: auto;
  }
`;

function SignNavbar() {
  const { setLogout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      alert("로그아웃 성공");
    } catch (error) {
      alert("로그아웃 실패");
    }
    setLogout();
  };

  return (
    <NavbarContainer>
      <Brand>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <img src="/GDGLogo.png" alt="GDG Logo" />
        </Link>
      </Brand>
    </NavbarContainer>
  );
}

export default SignNavbar;
