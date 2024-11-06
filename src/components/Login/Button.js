import styled from "styled-components";

export const Button = ({ text, width, onClick }) => {
  return (
    <Container width={width} onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 59px;
  background-color: #d9d9d9;
  border-radius: 21px;
  width: ${(props) => props.width}px;
  cursor: pointer;
`;

const ButtonText = styled.div`
  font-size: 32px;
  color: #a0a0a0;
`;
