import React, { useState } from "react";
import NavContext from "./NavContext";

const NavState = (props) => {
  const [openDrawerH, setOpenDrawerH] = useState(true);
  console.log(openDrawerH);

  const deviceChange = () => {
    setOpenDrawerH(!openDrawerH);
  };

  return (
    <NavContext.Provider value={{ openDrawerH, deviceChange, setOpenDrawerH }}>
      {props.children}
    </NavContext.Provider>
  );
};

export default NavState;
