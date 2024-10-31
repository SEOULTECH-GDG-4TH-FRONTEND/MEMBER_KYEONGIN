import styled from "styled-components";
import { Button } from "./Button";
export const ButtonArea = () => {
  return (
    <ButtonContainer>
      <Button text={"확인"} />
      <Button text={"질문 더 하기"} />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 45px;
  margin-bottom: 45px;
  gap: 27px;
`;
