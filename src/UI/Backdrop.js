import React, { useState, useContext } from "react";
import "../styles/Backdrop.css";
import { BackdropContext } from "../store/backdrop-context";

function Backdrop(props) {
  const BackdropCtx = useContext(BackdropContext);

  const backdropClickHandler = () => {
    console.log("backdropclick");
    BackdropCtx.setBackdrop(false);
  };

  return <div className="backdrop" onClick={backdropClickHandler}></div>;
}

export default Backdrop;
