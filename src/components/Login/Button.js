import styled from "styled-components";

export const Button = ({ text, width }) => {
  return (
    <Container width={width}>
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
`;

const ButtonText = styled.div`
  font-size: 32px;
  color: #a0a0a0;
`;
