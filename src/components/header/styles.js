import styled from "styled-components";

import { Link } from "react-router-dom";

export const Header = styled(Link)`
  background-color: #4f4fb0;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #fff;
    font-size: 60px;
  }
`;
