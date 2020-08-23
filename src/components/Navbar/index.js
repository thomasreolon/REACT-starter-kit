import React from "react";
import contexts from "../../scripts/Contexts";

const Navbar = (props) => {
  const [user] = contexts.user.useContext();

  return (
    <div style={{ backgroundColor: "lightcyan", textAlign: "center" }}>
      Hello, {user.user ? "You are signed in" : "sign in!"}
    </div>
  );
};

export default Navbar;
