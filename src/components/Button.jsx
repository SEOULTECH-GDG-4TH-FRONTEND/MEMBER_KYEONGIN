import styled from "styled-components";

const StyledButton = styled.button`
  display: flex; /* Flexbox 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
  padding: 20px;
  font-size: 1rem;
  color: white;
  background-color: #0644e1;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #033bca;
  }
`;

function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
