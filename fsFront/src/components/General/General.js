import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";

function General() {

  return (
    <div className="main">
      <Menu  />
      <Home />
    </div>
  );
}

export default General;
