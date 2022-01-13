import React, { useState } from "react";
import NavContext from "./NavContext";

const NavState = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  console.log(openDrawer);

  const deviceChange = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <NavContext.Provider value={{ openDrawer, deviceChange }}>
      {props.children}
    </NavContext.Provider>
  );
};

export default NavState;
