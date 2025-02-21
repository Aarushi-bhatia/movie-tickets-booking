import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "naval.ravikant" && password === "05111974") {
      navigate("/booking");
    } else {
      alert("Wrong credentials!");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="h-screen items-center justify-center flex">
      <div className="bg-black rounded-lg flex py-12 px-20 flex-col">
        <div className="flex items-center gap-3 mx-auto mb-6 ">
          <img src="icon.png" className="w-10" />
          <h1 className="text-3xl text-white font-bold ">NeoBuild</h1>
        </div>
        <div className="flex flex-col">
          <div className="relative mt-5 mx-auto">
            <img
              src="username.png"
              className="absolute left-7 top-7 w-5"
              alt="username icon"
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              className="bg-white placeholder-black font-bold text-center text-black m-5 px-4 py-2 rounded-sm"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative mx-auto">
            <img
              src="keyboard.png"
              className="absolute left-7 top-8 w-5"
              alt="password icon"
            />
            <input
              type="text"
              placeholder="Password"
              value={password}
              className="bg-white placeholder-black font-bold text-center text-black m-5 px-4 py-2 rounded-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleLogin}
            className="bg-white font-bold text-center text-black m-5 py-2 rounded-2xl"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
