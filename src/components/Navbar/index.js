import React from "react";
import contexts from "../../scripts/Contexts";

const Navbar = (props) => {
  const [user] = contexts.user.useContext();

  return (
    <div style={{ backgroundColor: "lightcyan", textAlign: "center" }}>
      Hello, {user.name}
    </div>
  );
};

export default Navbar;
