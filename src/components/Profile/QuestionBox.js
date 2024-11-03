import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const QuestionBox = (props) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Button
        onClick={() => {
          navigate("/send");
        }}
      >
        답장하기
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 23px;
  width: 80vw;
  height: 123px;
  background-color: #f5f5f5;
  border-radius: 21px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
  height: 74px;
  align-items: center;
  border-radius: 35px;
  background-color: #d9d9d9;
  margin-right: 20px;
  font-size: 24px;
  cursor: pointer;
`;
