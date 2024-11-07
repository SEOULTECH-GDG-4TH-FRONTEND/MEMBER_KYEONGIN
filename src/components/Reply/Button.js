import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Button = ({ text, route, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick(); // Execute the custom onClick if provided
    if (route) navigate(route); // Navigate if route is provided
  };

  return <Container onClick={handleClick}>{text}</Container>;
};

const Container = styled.div`
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
