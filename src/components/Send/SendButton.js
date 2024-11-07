import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const SendButton = ({ disabled }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled) {
      navigate("/profile");
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
  background-color: ${(props) => (props.disabled ? "#f0f0f0" : "#d9d9d9")};
  color: ${(props) => (props.disabled ? "#a0a0a0" : "#000")};
  border-radius: 21px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;
