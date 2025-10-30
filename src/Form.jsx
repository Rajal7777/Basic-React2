import React from "react";
import Buttton from "./Button";



const Form = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
     <Buttton buttonText="users" reqType={reqType} setReqType={setReqType} />
     <Buttton buttonText="posts" reqType={reqType} setReqType={setReqType} />
     <Buttton buttonText="comments" reqType={reqType} setReqType={setReqType} />

    </form>
  );
};

export default Form;
