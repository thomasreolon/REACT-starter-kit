import React from "react";
import contexts from "../../scripts/Contexts";

const Navbar = (props) => {
  const [user] = contexts.user.useContext();

  return (
    <div style={{ backgroundColor: "lightcyan", textAlign: "center" }}>
      {user ? `Hello, ${user?.email}` : "sign in!"}
    </div>
  );
};

export default Navbar;
