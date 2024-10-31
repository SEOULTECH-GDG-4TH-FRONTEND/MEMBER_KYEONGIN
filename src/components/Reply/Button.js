import styled from "styled-components";

export const Button = ({ text }) => {
  return <Container>{text}</Container>;
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
`;
