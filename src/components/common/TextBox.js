import styled from "styled-components";

export const TextBox = ({ fontsize, text, color }) => {
  return (
    <Container fontsize={fontsize} color={color}>
      {text}
    </Container>
  );
};

const Container = styled.div`
  font-size: ${(props) => props.fontsize}px;
  color: ${(props) => props.color};
`;
