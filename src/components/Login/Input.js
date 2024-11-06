import styled from "styled-components";
import { useState } from "react";
export const Input = ({ text, type, value, onChange }) => {
  const [isInputClicked, setIsInputClicked] = useState(false);
  return (
    <Container>
      <InputBox
        onFocus={() => {
          setIsInputClicked(true);
        }}
        onBlur={() => {
          setIsInputClicked(false);
        }}
        type={type}
        value={value}
        placeholder={isInputClicked === true ? "" : text}
        onChange={onChange}
      />
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
