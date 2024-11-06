import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const ReplyButton = ({ disabled }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled) {
      navigate("/main");
    }
  };

  return (
    <Container onClick={handleClick} disabled={disabled}>
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
  color: ${({ disabled }) => (disabled ? "#888" : "#000")};
  border-radius: 21px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;
