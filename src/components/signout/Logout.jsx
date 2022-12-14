import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../login/Button";

const Logout = () => {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
    localStorage.removeItem("authenticated");
  }

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default Logout;
