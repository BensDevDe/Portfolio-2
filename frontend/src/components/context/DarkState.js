import React, { useState } from "react";
import DarkContext from "./DarkContext";

const DarkState = (props) => {
  const [isDark, setIsDark] = useState(true);

  return (
    <DarkContext.Provider value={{ isDark, setIsDark }}>
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkState;
