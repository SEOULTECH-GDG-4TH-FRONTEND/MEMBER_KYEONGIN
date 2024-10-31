import styled from "styled-components";
export const Content = ({ text }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
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
`;

const Text = styled.div`
  font-size: 24px;
`;
