import styled from "styled-components";

const InputContainer = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.span`
  display: block;
  color: #a0a0a0;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #a0a0a0;
  border-radius: 12px;
  width: 100%;
`;

function InputFields({ label, onChange }) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input type="text" placeholder={label} onChange={onChange} />
    </InputContainer>
  );
}

export default InputFields;
