import styled from "styled-components";

export const AnswerArea = () => {
  return (
    <Container>
      <TextArea></TextArea>
    </Container>
  );
};

const Container = styled.div`
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

const TextArea = styled.div``;

const RateArea = styled.div``;
