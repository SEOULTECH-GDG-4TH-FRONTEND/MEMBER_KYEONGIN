import styled from "styled-components";
import { TopBar } from "../components/common/TopBar";
import { MemberBox } from "../components/Main/MemberBox";

export const MainPage = () => {
  return (
    <Container>
      <TopBar />
      <TextBox>누구에게 질문할까요?</TextBox>
      <MemberBox />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
`;

const TextBox = styled.div`
  margin-top: 77px;
  margin-left: 10vw;
  font-size: 32px;
  font-weight: 700;
`;
