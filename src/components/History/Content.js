import styled from "styled-components";
import { ReactComponent as CheckedBox } from "../../assets/images/CheckedBox.svg";
import { ReactComponent as UncheckedBox } from "../../assets/images/UncheckedBox.svg";
import { useState } from "react";

export const Content = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <Wrapper onClick={toggleCheckbox}>
      <Text>{text}</Text>
      <BoxContainer>
        {isChecked ? <CheckedBox /> : <UncheckedBox />}
      </BoxContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 20px;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  position: relative;
`;

const Text = styled.div`
  font-size: 24px;
  flex: 1;
  text-align: center;
`;

const BoxContainer = styled.div`
  position: absolute;
  right: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
