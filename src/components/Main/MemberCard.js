import styled from "styled-components";
import { ReactComponent as SkyProfileImage } from "../../assets/images/SkyProfileImage.svg";
import { ReactComponent as PurpleProfileImage } from "../../assets/images/PurpleProfileImage.svg";
import { ReactComponent as GreenProfileImage } from "../../assets/images/GreenProfileImage.svg";
import { ReactComponent as BlueProfileImage } from "../../assets/images/BlueProfileImage.svg";
import { TextBox } from "../common/TextBox";

export const MemberCard = ({ name, profileColor }) => {
  const renderProfileImage = () => {
    switch (profileColor) {
      case "sky":
        return <SkyProfileImage />;
      case "purple":
        return <PurpleProfileImage />;
      case "green":
        return <GreenProfileImage />;
      case "blue":
        return <BlueProfileImage />;
      default:
        return <SkyProfileImage />; // 기본 이미지
    }
  };

  return (
    <Container>
      {renderProfileImage()}
      <TextContainer>
        <TextBox fontsize={20} text={name}></TextBox>
        <TextBox
          fontsize={14}
          text={"안녕하세요. 질문해주세요"}
          color={"#949494"}
        ></TextBox>
      </TextContainer>
      <QuestionNumBox>
        <div>💬 받은 질문</div>
        <div>999개</div>
      </QuestionNumBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 0;
  width: 326px;
  height: 219px;
  border-radius: 21px;
  background-color: #f5f5f5;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 8px;
  font-weight: 700;
`;

const QuestionNumBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 29px;
  font-size: 15px;
  font-weight: 700;
  color: #949494;
  justify-content: space-between;
`;
