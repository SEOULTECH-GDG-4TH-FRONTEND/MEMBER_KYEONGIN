import styled from "styled-components";

export const Input = ({ text }) => {
  return (
    <Container>
      <InputBox placeholder={text} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 30px;
`;

const InputBox = styled.input`
  width: 1035px;
  height: 67px;
  font-size: 36px;
  padding-left: 30px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 21px;
  outline: none;
`;
