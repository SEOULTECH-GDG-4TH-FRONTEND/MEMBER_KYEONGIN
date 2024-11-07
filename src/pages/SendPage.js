import styled from "styled-components";
import { TopBar } from "../components/common/TopBar";
import { ProfileBar } from "../components/common/ProfileBar";
import { ContentInput } from "../components/common/ContentInput";
import { SendButton } from "../components/Send/SendButton";
import { useState, useEffect } from "react";

export const SendPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    setIsButtonActive(inputValue.trim().length > 0);
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <Container>
      <TopBar />
      <TextBox>답변을 보낼거에요!</TextBox>
      <ProfileBar />
      <ContentInput onChange={handleInputChange} />
      <SendButton disabled={!isButtonActive} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const TextBox = styled.div`
  margin-top: 70px;
  margin-left: 10vw;
  font-size: 32px;
  font-weight: 700;
`;
