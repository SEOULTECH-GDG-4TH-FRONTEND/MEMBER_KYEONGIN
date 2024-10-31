import styled from "styled-components";
import { TopBar } from "../components/common/TopBar";
import { ProfileBar } from "../components/common/ProfileBar";
import { ContentInput } from "../components/common/ContentInput";
import { ReplyButton } from "../components/Question/ReplyButton";

export const QuestionPage = () => {
  return (
    <Container>
      <TopBar />
      <TextBox>누구에게 질문할까요?</TextBox>
      <ProfileBar />
      <ContentInput />
      <ReplyButton />
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
  margin-left: 10%;
  font-size: 32px;
  font-weight: 700;
`;
