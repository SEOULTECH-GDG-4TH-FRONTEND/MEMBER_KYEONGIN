import styled from "styled-components";
import { MemberCard } from "./MemberCard";

export const MemberBox = () => {
  return (
    <Container>
      <MemberCard name={"정윤석"} profileColor={"sky"} />
      <MemberCard name={"이유진"} profileColor={"purple"} />
      <MemberCard name={"김하늘"} profileColor={"green"} />
      <MemberCard name={"노경인"} profileColor={"blue"} />
      <MemberCard name={"박지윤"} profileColor={"sky"} />
      <MemberCard name={"이서인"} profileColor={"purple"} />
      <MemberCard name={"이민혁"} profileColor={"green"} />
      <MemberCard name={"조유찬"} profileColor={"blue"} />
      <MemberCard name={"신민규"} profileColor={"sky"} />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2vw 3vw;
  padding: 5vh 10vw;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
