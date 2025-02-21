import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "naval" && password === "123") {
      navigate("/booking");
    } else {
      alert("wrong credentials");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="h-screen items-center justify-center flex">
      <div className="bg-black rounded flex flex-col">
        <div className="flex flex-col">
      <input
        type="text"
        placeholder="Username"
        value={username}
        className="bg-white text-black m-5 px-4 py-2 rounded-sm"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        className="bg-white text-black m-5 px-4 py-2 rounded-sm"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-white text-black m-5 px-4 py-2 rounded-2xl">Login</button>
      </div>
      </div>
    </div>
  );
};

export default Login;
