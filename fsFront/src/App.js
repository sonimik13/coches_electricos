import "./App.css";
import React, { useState, useEffect } from "react";
import AuthContext from "./contexts/AuthContext";
import Signin from "./components/Signin/Signin";
import General from "./components/General/General";

function App() {
  const [menu, setMenu] = useState(false);
  const [token, setToken] = useState("");

  const toggleMenu = () => setMenu(!menu);

  const logout = async () => {
    await sessionStorage.setItem("token", "");
    await setToken(sessionStorage.getItem("token"));
  };

  const signin = (token) => {
    sessionStorage.setItem("token", token);
    setToken(token);
  };

  const dataContext = {
    menu,
    toggleMenu,
    logout,
    token
  };

  return (
    <div className="App">
      {token !== "" ? (
        <AuthContext.Provider value={dataContext}>
          <General />
        </AuthContext.Provider>
      ) : (
        <Signin signin={signin} />
      )}
    </div>
  );
}

export default App;
