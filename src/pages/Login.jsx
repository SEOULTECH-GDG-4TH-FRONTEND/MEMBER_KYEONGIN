import styled from "styled-components";
import InputFields from "../components/InputFields";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { login } from "../apis/user";
import SignNavbar from "../components/SignNavbar";
function Login() {
  const navigate = useNavigate();
  const { setLogin, isLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert("로그인 성공");
      setLogin();
    } catch (error) {
      alert("로그인 실패");
    }
  };

  return (
    <>
      {" "}
      <Container>
        <LeftWrap>
          <img src="/GDGLogo.png" alt="GDG Logo" />
        </LeftWrap>
        <RightWrap>
          <LoginContainer>
            <Text>Login</Text>
            <InputFields
              label="이메일"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputFields
              label="비밀번호"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonContainer>
              <Button
                onClick={() => {
                  handleLogin();
                }}
              >
                로그인
              </Button>
            </ButtonContainer>
            <GoogleContainer>
              <img
                src="/googleSignup.png"
                alt="google sign up"
                onClick={() => {
                  alert("서비스 개발중입니다.");
                }}
              />
            </GoogleContainer>

            <TextContainer>
              <InfoText>아직 회원이 아니신가요?</InfoText>
              <SignupText
                onClick={() => {
                  navigate("/signup");
                }}
              >
                회원가입
              </SignupText>
            </TextContainer>
          </LoginContainer>
        </RightWrap>
      </Container>
    </>
  );
}

export default Login;

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 5% 10% 0% 10%;
  width: 100%;
  justify-contents: center;
`;

const LeftWrap = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  padding-left: 65px;
  color: white;
  font-size: 64px;
  font-weight: 900;
  line-height: 1.2;
  position: relative;
`;

const RightWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 65px;
  width: 100%;
`;

const LoginContainer = styled.div`
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

  button {
    height: 30px;
  }
`;

const GoogleContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 40px; /* Slightly increased height */
  width: 400px; /* Slightly increased width */
  justify-content: center; /* Center the content */
  align-items: center;
  margin-top: 10px;

  img {
    max-height: 100%; /* Ensure the image scales properly */
    max-width: 100%; /* Ensure the image scales properly */
    cursor: pointer;
  }
`;

const Text = styled.h1`
  font-size: 48px;
  margin-bottom: 44px;
  text-align: center;
  width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end; /* 텍스트를 오른쪽으로 배치 */
  align-items: center;
  margin-top: 30px;
  gap: 5px; /* 텍스트 간 간격 */
`;

const SignupText = styled.h3`
  font-size: 13px;
  text-align: right;
  cursor: pointer;
  text-decoration: underline; /* 밑줄 추가 */
  color: #007bff; /* 강조 색상 */
  margin: 0;
`;

const InfoText = styled.h3`
  font-size: 13px;
  color: #666;
  margin: 0;
`;
