import styled from "styled-components";
import { TopBar } from "../components/common/TopBar";
import { Input } from "../components/Login/Input";
import { Button } from "../components/Login/Button";

export const LoginPage = () => {
  return (
    <Container>
      <TopBar />
      <TextBox>Login</TextBox>
      <ContentBox>
        <LoginInputBox>
          <Input text={"ID"} />
          <Input text={"PASSWORD"} />
        </LoginInputBox>
        <ButtonBox>
          <Button text={"로그인"} width={179} />
          <Button text={"회원가입"} width={227} />
        </ButtonBox>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  display: flex;
  margin-top: 75px;
  justify-content: center;
  font-size: 48px;
  font-weight: 700;
`;

const LoginInputBox = styled.div`
  margin-top: 73px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 59px;
  margin-right: 21px;
  gap: 19px;
`;

const ContentBox = styled.div`
  width: 1035px;
  height: 262px;
`;
