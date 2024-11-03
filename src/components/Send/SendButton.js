import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const SendButton = () => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        navigate("/profile");
      }}
    >
      답장하기
    </Container>
  );
};

const Container = styled.div`
  margin-left: 40vw;
  margin-top: 32px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 20vw;
  height: 53px;
  font-size: 24px;
  background-color: #d9d9d9;
  border-radius: 21px;
  cursor: pointer;
`;
