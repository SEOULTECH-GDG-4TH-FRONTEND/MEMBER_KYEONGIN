import styled from "styled-components";
import { TopBar } from "../components/common/TopBar";
import { InfoContainer } from "../components/History/InfoContainer";
import { HistoryContentBox } from "../components/History/HistoryContentBox";
export const HistoryPage = () => {
  return (
    <Container>
      <TopBar />
      <HistoryContainer>
        <InfoContainer />
        <HistoryContentBox />
      </HistoryContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HistoryContainer = styled.div`
  display: flex;
  margin-left: 10vw;
`;
