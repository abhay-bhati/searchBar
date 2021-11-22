import React, { useState } from "react";

export const BackdropContext = React.createContext();

function BackdropProvider(props) {
  const [isBackdrop, setIsBackdrop] = useState(false);

  const backdropHandler = (val) => {
    console.log("backdrop handler");
    setIsBackdrop(val);
  };

  const defValues = {
    backdrop: isBackdrop,
    setBackdrop: backdropHandler,
  };

  return (
    <BackdropContext.Provider value={defValues}>
      {props.children}
    </BackdropContext.Provider>
  );
}

export default BackdropProvider;
