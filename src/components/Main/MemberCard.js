import styled from "styled-components";
import { ReactComponent as SkyProfileImage } from "../../assets/images/SkyProfileImage.svg";
import { ReactComponent as PurpleProfileImage } from "../../assets/images/PurpleProfileImage.svg";
import { ReactComponent as GreenProfileImage } from "../../assets/images/GreenProfileImage.svg";
import { ReactComponent as BlueProfileImage } from "../../assets/images/BlueProfileImage.svg";
import { TextBox } from "../common/TextBox";
import { useNavigate } from "react-router-dom";

export const MemberCard = ({ name, profileColor }) => {
  const navigate = useNavigate();
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
        return <SkyProfileImage />;
    }
  };

  return (
    <CardContainer
      onClick={() => {
        navigate("/question");
      }}
    >
      {renderProfileImage()}
      <TextContainer>
        <TextBox fontsize="1.6vw" text={name} />
        <TextBox
          fontsize="1.2vw"
          text="안녕하세요. 질문해주세요"
          color="#949494"
        />
      </TextContainer>
      <QuestionNumBox>
        <div>💬 받은 질문</div>
        <div>999개</div>
      </QuestionNumBox>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vh 1.5vw;
  width: 90%;
  height: auto;
  max-width: 320px;
  min-height: 180px;
  border-radius: 1vw;
  background-color: #f5f5f5;
  cursor: pointer;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vh;
  margin-top: 1vh;
  font-weight: 700;
`;

const QuestionNumBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5vh;
  font-size: 1.2vw;
  font-weight: 700;
  color: #949494;
`;
