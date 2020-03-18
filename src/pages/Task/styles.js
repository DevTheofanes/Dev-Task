import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const Container = styled.div`
  max-width: 800px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 30px auto;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
  button {
    background-color: #009cde;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  div {
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
  }
  span {
    margin-top: 5px;
    color: #333;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: "submit"
})`
  cursor: pointer;
  border: 0;
  height: 30px;
  background: #080;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SubmitButtonClear = styled.button.attrs({
  type: "submit"
})`
  cursor: pointer;
  border: 0;
  background: #f00;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
