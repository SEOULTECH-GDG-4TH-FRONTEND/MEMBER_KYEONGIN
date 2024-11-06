import styled from "styled-components";
import { MemberCard } from "./MemberCard";
import { Data } from "../../assets/Data";
export const MemberBox = () => {
  return (
    <Container>
      {Data.map((member) => (
        <MemberCard
          key={member.id}
          id={member.id}
          profileColor={member.color}
          name={member.name}
          bio={member.bio}
          questionCount={member.questionCount}
        />
      ))}
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
