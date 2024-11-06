import styled from "styled-components";
import { TopBar } from "../components/common/TopBar";
import { ProfileBar } from "../components/common/ProfileBar";
import { ContentInput } from "../components/common/ContentInput";
import { ReplyButton } from "../components/Question/ReplyButton";
import { useEffect, useState } from "react";

export const QuestionPage = () => {
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
      <TextBox>누구에게 질문할까요?</TextBox>
      <ProfileBar />
      <ContentInput onChange={handleInputChange} />
      <ReplyButton disabled={!isButtonActive} />
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
