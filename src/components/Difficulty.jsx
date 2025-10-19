import styled from "styled-components";

const DifficultyWrapper = styled.div`
  background-color: white;
  border-radius: 25px;
  padding: 10px;
  text-align: center;
`;

const DifficultyButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 8px;
`;

const Button = styled.button`
  padding: 6px 14px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  background-color: ${({ active, color }) => (active ? color : "#fff8dc")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  box-shadow: ${({ active, color }) =>
    active && color === "red" ? "0 0 10px 3px red" : "none"};
  transition: 0.3s;
`;

export const Difficulty = ({ level }) => (
  <DifficultyWrapper>
    <h3>Difficulty</h3>
    <DifficultyButtons>
      <Button color="green" active={level === 0}>
        Easy
      </Button>
      <Button color="gold" active={level === 1}>
        Medium
      </Button>
      <Button color="red" active={level === 3}>
        Hard
      </Button>
    </DifficultyButtons>
  </DifficultyWrapper>
);
