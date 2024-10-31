import styled from "styled-components";

export const ContentInput = () => {
  return (
    <>
      <InputArea />
    </>
  );
};

const InputArea = styled.textarea`
  padding-left: 16px;
  padding-top: 16px;
  margin-top: 32px;
  margin-left: 10%;
  margin-right: 10%;
  border: none;
  outline: none;
  width: 80%;
  background-color: #f4f4f4;
  height: 363px;
  border-radius: 21px;
  resize: none;
`;
