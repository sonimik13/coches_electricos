import LoginForm from './Components/Login/login'
import React, { useState } from 'react';


const App = () => {
  const adminUser = {
    email: "gonzandres_39@hotmail.com",
    password: "Tea1"
  }
  const [user, setUser] = useState({ email: "", password: "" })
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in")
      setUser({
        email: details.email
      })
    } else {
      console.log("Details do not match")
      setError("Details do not match")
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" })
  }

  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Welcome <span>{user.name}</span> </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
