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
  margin-top: 49px;
  margin-left: 10vw;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 29px 39px;
  width: 1056px;
`;
