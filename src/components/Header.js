import React from "react";
import { Avatar } from "@material-ui/core";
import { useGlobalContext } from "../context";
function Header() {
  const { isUser, setIsUser } = useGlobalContext();
  const handleLogin = () => {
    setIsUser(!isUser);
  };

  return (
    <nav>
      <h2>Dashy</h2>
      <ul className="nav-links">
        <li></li>
        <li></li>
        <li>
          <Avatar onClick={handleLogin}>{isUser ? "Z" : " "}</Avatar>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
