import styled from "styled-components";
export const InfoContainer = () => {
  return (
    <Container>
      <LevelBox>Lv 01.신입멤버</LevelBox>
      <NameTextBox>경인님의</NameTextBox>
      <TextBox>활동 내용</TextBox>
      <Bar />
      <LevelupPopUp>레벨 업!</LevelupPopUp>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 110px;
  align-items: center; /* Center align other elements */
`;

const LevelBox = styled.div`
  font-size: 24px;
  color: #abe6ff;
  font-weight: 700;
  -webkit-text-stroke: 1px #d9d9d9;
`;

const NameTextBox = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-top: 38px;
`;

const TextBox = styled.div`
  font-size: 48px;
  font-weight: 700;
`;

const Bar = styled.div`
  width: 160px;
  border: 10px solid #abe6ff;
  margin-top: 75px;
`;

const LevelupPopUp = styled.div`
  display: flex;
  width: 250px;
  height: 95px;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  color: #a0a0a0;
  font-size: 32px;
  font-weight: 700;
  border-radius: 30px;
  align-self: flex-start; /* Aligns only this element to the start */
  margin-top: 60px;
`;
