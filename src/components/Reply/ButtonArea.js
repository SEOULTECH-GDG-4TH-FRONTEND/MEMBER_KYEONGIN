import styled from "styled-components";
import { Button } from "./Button";

export const ButtonArea = () => {
  const handleConfirmClick = () => {
    console.log("Confirm button clicked"); // Custom action for confirm button
  };

  const handleQuestionClick = () => {
    console.log("Ask more questions button clicked"); // Custom action for question button
  };

  return (
    <ButtonContainer>
      <Button text="확인" route="/main" onClick={handleConfirmClick} />
      <Button text="질문 더 하기" route="/main" onClick={handleQuestionClick} />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 45px;
  margin-bottom: 45px;
  justify-content: center;
  gap: 27px;
`;
