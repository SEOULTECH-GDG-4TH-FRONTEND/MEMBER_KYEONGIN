import { ReactComponent as GoodButton } from "../../assets/images/GoodButton.svg";
import { ReactComponent as BadButton } from "../../assets/images/BadButton.svg";
import styled from "styled-components";
export const RateButton = () => {
  return (
    <Container>
      <GoodButton />
      <BadButton />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-left: 15px;
  gap: 10px;
`;
