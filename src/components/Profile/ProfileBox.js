import styled from "styled-components";
import { ReactComponent as SkyProfileImage } from "../../assets/images/SkyProfileImage.svg";
export const ProfileBox = () => {
  return (
    <Wrapper>
      <StyledSkyProfileImage />
      <TextName>노경인</TextName>
      <TextIntro>안녕하세요. 질문해주세요</TextIntro>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 39px;
`;

const StyledSkyProfileImage = styled(SkyProfileImage)`
  width: 160px;
  height: 160px;
`;

const TextName = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
`;

const TextIntro = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-top: 5px;
`;
