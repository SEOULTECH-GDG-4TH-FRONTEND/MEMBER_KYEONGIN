import styled from "styled-components";
import { TopBar } from "../components/common/TopBar";
import { ProfileBar } from "../components/common/ProfileBar";
import { ContentInput } from "../components/common/ContentInput";
import { SendButton } from "../components/Send/SendButton";

export const SendPage = () => {
  return (
    <Container>
      <TopBar />
      <TextBox>답변이 도착했어요!</TextBox>
      <ProfileBar />
      <ContentInput />
      <SendButton />
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
