import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logout } from "../assets/images/Logout.svg";
import { ReactComponent as Profile } from "../assets/images/Profile.svg";
import { useAuth } from "../context/AuthContext";
import { logout } from "../apis/user";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: space-between; /* 좌우 배치 */
  padding: 1rem 2rem; /* 좌우 패딩 */
  background-color: #ffffff;
  color: #373737;
  box-shadow: 0 4px 6.6px rgba(0, 0, 0, 0.1);
`;

const Brand = styled.div`
  position: absolute;
  left: 50%; /* 부모 기준 중앙 정렬 */
  transform: translateX(-50%); /* 중앙 정렬 보정 */

  a img {
    width: 100px; /* 로고 크기 조정 */
    height: auto;
  }
`;

const MenuLeft = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  margin-left: auto; /* 오른쪽 정렬 */
`;

const MenuItem = styled.li`
  a {
    color: #373737;
    font-weight: 700;
    text-decoration: none;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    font-size: 1.2rem;

    &:hover {
      color: #007bff;
    }
  }
`;

function Navbar() {
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
      <MenuLeft>
        <MenuItem>
          <Link to="/profile" title="Profile">
            <Profile />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/login" onClick={handleLogout} title="Logout">
            <Logout />
          </Link>
        </MenuItem>
      </MenuLeft>
    </NavbarContainer>
  );
}

export default Navbar;
