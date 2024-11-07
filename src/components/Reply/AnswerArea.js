import styled from "styled-components";
import { RateButton } from "./RateButton";

export const AnswerArea = () => {
  return (
    <Container>
      <TextArea></TextArea>
      <RateArea>
        <Comment>답변이 만족스러운가요? 반응을 남겨 주세요! </Comment>
        <RateButton />
      </RateArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 16px;
  padding-top: 16px;
  margin-top: 32px;
  margin-left: 10vw;
  margin-right: 10vw;
  width: 80vw;
  background-color: #f4f4f4;
  height: 363px;
  border-radius: 21px;
  resize: none;
`;

const TextArea = styled.div`
  flex: 1;
`;

const RateArea = styled.div`
  display: flex;
  margin-bottom: 31px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  cursor: pointer;
`;

const Comment = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
