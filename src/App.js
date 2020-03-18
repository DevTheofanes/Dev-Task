import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

import Global from "./styles/global";
import Header from "./components/header";

import Routes from "./routes";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
      <Global />
    </>
  );
}

export default App;
