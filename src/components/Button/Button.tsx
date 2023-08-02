import React, { useState } from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  const[test,setTest]=useState(false)
  return <button onClick={()=>setTest(!test)}>{test?"default":props.label}</button>;
};

export default Button;
