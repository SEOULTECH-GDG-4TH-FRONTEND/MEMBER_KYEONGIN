import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const getBackgroundColor = (id) => {
  switch (id % 4) {
    case 0:
      return "#F9C5C5"; // 파스텔 빨강
    case 1:
      return "#A8D5BA"; // 파스텔 녹색
    case 2:
      return "#FBE7A1"; // 파스텔 노랑
    case 3:
      return "#A7C8F2"; // 파스텔 파랑
    default:
      return "#FFFFFF"; // 기본값 (흰색)
  }
};

export const getProfileIcon = (id) => {
  switch (id % 3) {
    case 0:
      return "🤗";
    case 1:
      return "😎";
    case 2:
      return "🤔";
    default:
      return "😀";
  }
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 16px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid white; /* 기본 테두리 */
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease,
    border-color 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05); /* 크기 증가 */
    background-color: #f0f0f0; /* 배경색 변경 */
    border-color: ${(props) =>
      getBackgroundColor(props.id)}; /* 배경색과 같은 테두리 */
  }
`;

const ProfileImage = styled.div`
  background-color: ${(props) => getBackgroundColor(props.id)};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  margin-bottom: 15px;
  position: relative;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.isHovered ? 0 : 1)}; /* 마우스 오버 시 투명화 */
`;

const HoverIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  display: ${(props) =>
    props.isHovered ? "block" : "none"}; /* 마우스 오버 시 표시 */
`;

const HoverBio = styled.div`
  position: absolute;
  width: 300px;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  font-weight: 700;
  color: #666;
  display: ${(props) =>
    props.isHovered ? "block" : "none"}; /* 마우스 오버 시 표시 */
  text-align: center;
`;

const UserName = styled.h2`
  font-size: 20px;
  margin: 0;
  color: ${(props) => (props.isHovered ? "transparent" : "#333")};
  transition: color 0.3s ease;
`;

const UserBio = styled.p`
  font-size: 14px;
  color: ${(props) => (props.isHovered ? "transparent" : "#666")};
  margin: 10px 0;
  transition: color 0.3s ease;
`;

const QuestionCount = styled.p`
  font-size: 14px;
  color: ${(props) => (props.isHovered ? "transparent" : "#999")};
  margin-top: auto;
  transition: color 0.3s ease;
`;

const ProfileCard = (props) => {
  const [profileIcon, setProfileIcon] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setProfileIcon(getProfileIcon(props.id));
  }, [props.id]);

  return (
    <CardContainer
      id={props.id}
      onClick={props.onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProfileImage id={props.id} isHovered={isHovered}>
        {profileIcon}
      </ProfileImage>
      <HoverIcon isHovered={isHovered}>📩</HoverIcon>
      <HoverBio isHovered={isHovered}>"{props.bio}"</HoverBio>
      <UserName isHovered={isHovered}>{props.name}</UserName>
      <UserBio isHovered={isHovered}>{props.bio}</UserBio>
      <QuestionCount isHovered={isHovered}>
        💬 받은 질문 {props.questionCount}개
      </QuestionCount>
    </CardContainer>
  );
};

export default ProfileCard;
