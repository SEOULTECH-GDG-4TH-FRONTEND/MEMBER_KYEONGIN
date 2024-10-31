import styled from "styled-components";
import { TopBar } from "../components/common/TopBar";
import { ProfileBar } from "../components/common/ProfileBar";
import { AnswerArea } from "../components/Reply/AnswerArea";
import { ButtonArea } from "../components/Reply/ButtonArea";

export const ReplyPage = () => {
  return (
    <Container>
      <TopBar />
      <TextBox>답변이 도착했어요!</TextBox>
      <ProfileBar />
      <AnswerArea />
      <ButtonArea />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* 전체 요소를 가운데 정렬 */
  flex-direction: column;
`;

const TextBox = styled.div`
  margin-top: 70px;
  margin-left: 10vw;
  font-size: 32px;
  font-weight: 700;
  align-self: flex-start; /* TextBox만 왼쪽 정렬 */
`;
