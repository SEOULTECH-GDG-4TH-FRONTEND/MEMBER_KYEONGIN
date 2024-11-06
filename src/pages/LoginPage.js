import React, { useState } from "react";
import styled from "styled-components";
import { TopBar } from "../components/common/TopBar";
import { Input } from "../components/Login/Input";
import { Button } from "../components/Login/Button";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    const validId = "1234";
    const validPassword = "1234";

    if (id === validId && password === validPassword) {
      navigate("/main");
    } else {
      alert("Invalid ID or password");
      setId("");
      setPassword("");
    }
  };

  return (
    <Container>
      <TopBar />
      <TextBox>Login</TextBox>
      <ContentBox>
        <LoginInputBox>
          <Input
            text={"ID"}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Input
            text={"PASSWORD"}
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </LoginInputBox>
        <ButtonBox>
          <Button text={"로그인"} width={179} onClick={handleLogin} />
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

const ErrorText = styled.div`
  color: red;
  margin-top: 10px;
  text-align: center;
`;
