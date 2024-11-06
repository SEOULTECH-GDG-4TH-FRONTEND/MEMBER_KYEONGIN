import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Data } from "../../assets/Data";
import { fetchcProfileImage } from "../../utils/fetchProfileImage";

export const ProfileBar = () => {
  const [target, setTarget] = useState({});
  const [profileImage, setProfileImage] = useState();
  const { id } = useParams();

  useEffect(() => {
    const image = fetchcProfileImage(target.color);
    setProfileImage(image);
  }, [target]);
  useEffect(() => {
    console.log(id);
    const targetUser = Data.find((user) => user.id == id);
    setTarget(targetUser || {});
  }, [id]);

  return (
    <Container>
      {profileImage}
      <TextContainer>
        <TextName>{target.name}</TextName>
        <TextIntro>{target.bio}</TextIntro>
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
  margin-top: 21px;
  margin-left: 10vw;
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
