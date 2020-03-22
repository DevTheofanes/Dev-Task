import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
  }
  body, html, #root{
    min-height: 100%;
    -webkit-font-smoothing: antialiased !important;
  }
  body{
    background-color: #4f4fb0;
    text-rendering: optimizeLegibility !important;
    font-family: sans-serif;
  }
`;
