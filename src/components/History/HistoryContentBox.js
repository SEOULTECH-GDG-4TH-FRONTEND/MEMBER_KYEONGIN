import styled from "styled-components";
import { Content } from "./Content";
export const HistoryContentBox = () => {
  return (
    <Container>
      <Content text={"질문 1회"} />
      <Content text={"답변 1회"} />
      <Content text={"프로필 설정"} />
      <Content text={"반응 받기 1회"} />
      <Content text={"모든 멤버에게 질문(1/13)"} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 22px;
  margin-top: 71px;
  margin-left: 135px;
`;
