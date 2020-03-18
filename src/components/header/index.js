import React from "react";

import { Header } from "./styles";
import { MdAssignment } from "react-icons/md";

export default function header() {
  return (
    <Header to="/">
      <MdAssignment size={60} color="#fff" />
      <h1>DevTask</h1>
    </Header>
  );
}
