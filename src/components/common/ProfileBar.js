import styled from "styled-components";
import { ReactComponent as ProfileBox } from "../../assets/images/SkyProfileImage.svg";
export const ProfileBar = () => {
  return (
    <Container>
      <ProfileBox />
      <TextContainer>
        <TextName>정윤석</TextName>
        <TextIntro>안녕하세요 질문해주세요</TextIntro>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 16px 0 16px 16px;
  width: 80%;
  background-color: #f5f5f5;
  border-radius: 21px;
  margin-left: 10%;
  margin-top: 21px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`;

const TextName = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

const TextIntro = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: #949494;
`;
