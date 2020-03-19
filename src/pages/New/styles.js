import styled from "styled-components";

export const AddContainer = styled.form`
  max-width: 800px;
  background-color: #fff;
  border-radius: 4px;
  padding: 30px;
  margin: 30px auto;
  display: flex;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
  button {
    width: 50px;
    justify-content: center;
    align-items: center;
    background-color: #4f4fb0;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    margin-left: 15px;
  }
`;
