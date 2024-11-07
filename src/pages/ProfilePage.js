import styled from "styled-components";
import { TopBar } from "../components/common/TopBar";
import { ProfileBox } from "../components/Profile/ProfileBox";
import { QuestionBox } from "../components/Profile/QuestionBox";
export const ProfilePage = () => {
  return (
    <Container>
      <TopBar />
      <ProfileBox />
      <TextBox>총 3개의 질문을 받았어요!</TextBox>
      <QuestionBox />
      <QuestionBox />
      <QuestionBox />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
`;

const TextBox = styled.div`
  font-size: 32px;
  font-weight: 700;
  align-self: flex-start;
  margin-top: 19px;
  margin-left: 10%;
`;
