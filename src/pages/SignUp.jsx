import styled from "styled-components";
import InputFields from "../components/InputFields";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { signup } from "../apis/user";
import SignNavbar from "../components/SignNavbar";

function SignUp() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleSignup = async () => {
    try {
      await signup(username, password1, password2, email);
      alert("회원가입 성공");
      navigate("/login");
    } catch (error) {
      alert("회원가입 실패");
    }
  };

  return (
    <>
      <SignNavbar />
      <Container>
        <SignupContainer>
          <Text>Sign Up</Text>
          <InputFields
            label="이메일"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputFields
            label="비밀번호"
            type="password"
            onChange={(e) => {
              setPassword1(e.target.value);
            }}
          />
          <InputFields
            label="비밀번호 확인"
            type="password"
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
          <InputFields
            label="닉네임"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <ButtonContainer>
            <Button
              onClick={() => {
                handleSignup();
              }}
            >
              회원가입
            </Button>
            <Button
              onClick={() => {
                navigate("/login");
              }}
            >
              돌아가기
            </Button>
          </ButtonContainer>
        </SignupContainer>
      </Container>
    </>
  );
}

export default SignUp;

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 5% 20% 0% 20%;
  width: 100%;
  justify-content: center;
`;

const SignupContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-direction: column;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: right;
  padding-bottom: 30px;

  button {
    width: 100px;
    height: 30px; /* 버튼 높이 설정 */
  }
`;

const Text = styled.h1`
  font-size: 48px;
  margin-bottom: 44px;
  text-align: center;
  width: 100%;
`;
