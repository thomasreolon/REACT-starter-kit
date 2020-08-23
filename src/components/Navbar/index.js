import React from "react";
import contexts from "../../scripts/Contexts";

const Navbar = (props) => {
  const [user, dispatchUser] = contexts.user.useContext();
  console.log("Hello |", user, "|");

  return (
    <div style={{ backgroundColor: "lightcyan", textAlign: "center" }}>
      Hello, |{user.name}|
    </div>
  );
};

export default Navbar;
