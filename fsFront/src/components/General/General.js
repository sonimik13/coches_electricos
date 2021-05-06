import React, { useState, useEffect } from "react";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import FetchUser from "../../Hooks/FetchUser";

function General() {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetch1 =  async () => {
      const result = await FetchUser(sessionStorage.getItem("token"));
      const data = await result.json();
      await setUser(data.result);
    };
    fetch1();
  }, []);

  return (
    <div className="main">
      <Menu  data={user}/>
      <Home data={user}/>
    </div>
  );
}

export default General;
