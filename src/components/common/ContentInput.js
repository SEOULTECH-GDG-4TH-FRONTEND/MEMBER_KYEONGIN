import styled from "styled-components";

export const ContentInput = ({ value, onChange }) => {
  return (
    <>
      <InputArea value={value} onChange={onChange} />
    </>
  );
};

const InputArea = styled.textarea`
  padding-left: 16px;
  padding-top: 16px;
  margin-top: 32px;
  margin-left: 10vw;
  margin-right: 10vw;
  border: none;
  outline: none;
  width: 80vw;
  background-color: #f4f4f4;
  height: 363px;
  border-radius: 21px;
  resize: none;
`;
