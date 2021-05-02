import "./App.css";
import React, { useState } from "react";
import AuthContext from "./contexts/AuthContext";
import Menu from "./components/Menu/Menu";

import Signin from "./components/Signin/Signin";
import Home from "./components/Home/Home";

function App() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu(!menu);

  const dataContext = {
    menu,
    toggleMenu,
  };
  return (
    <div className="App">
      {/* <Signin /> */}
      <AuthContext.Provider value={dataContext}>
        <Menu />
        <Home />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
