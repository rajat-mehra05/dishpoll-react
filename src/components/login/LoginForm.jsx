import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersData from "../../api-data/users.json";
import { useInput } from "../../hooks/useInput";
import Button from "./Button";
import InputForm from "./InputForm";

const LoginForm = () => {
  const userName = useInput("amar");
  const userPassword = useInput("amar123");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
    const user = usersData.filter(
      (singleUser) => singleUser.username === userName.value
    );

    if (user.length === 0) {
      alert("Hey, no such user found in database");
    } else {
      if (user[0].password !== userPassword.value) {
        alert("Please fill the correct passwod");
        return;
      }
      setIsUserLoggedIn(true);
      setTimeout(() => {
        navigate("/tabscreen");
      }, 500);
      setIsUserLoggedIn(false);
    }
  }

  return (
    <div className="flex flex-col justify-center my-20 sm:items-center sm:h-full">
      <h1 className="text-center text-2xl font-bold text-[#c94815]">Sign In</h1>
      <div className=" bg-[#e98158] sm:w-96 w-80 p-4 my-2 mx-auto space-y-4 text-center">
        <InputForm
          data-key="username"
          type="username"
          label="Username"
          {...userName}
        />
        <InputForm
          data-key="password"
          type="password"
          label="Password"
          minLength={8}
          maxLength={16}
          {...userPassword}
        />
        <Button onClick={handleLogin}>
          {isUserLoggedIn ? "Fetching details" : "Login"}
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
