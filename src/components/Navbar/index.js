import React from "react";
import contexts from "../../scripts/contexts";

const Navbar = (props) => {
  // update firebase auth
  const [{ user }] = contexts.user.useContext();
  return (
    <div style={{ backgroundColor: "lightcyan", textAlign: "center" }}>
      {user ? `Hello, ${user?.email}` : "sign in!"}
    </div>
  );
};

export default Navbar;
