import React from "react";

const Buttton = ({ buttonText, reqType, setReqType }) => {
  return (
    <button
      className={buttonText === reqType ? "selected" : null}
      onClick={() => setReqType(buttonText)}
    >
      {buttonText}
    </button>
  );
};

export default Buttton;
