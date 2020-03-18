import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Box = styled.div`
  max-width: 200px;
  max-height: 180px;
  background-color: #fff;
  padding: 15px;
  img {
    border-radius: 6px;
    width: 200px;
  }
  span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: #4f4fb0;
  }
`;
