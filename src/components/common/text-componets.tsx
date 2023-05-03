import React from "react";

interface IProps {
  text: string;
  
}

function TextComp(props: IProps) {
  return <div className={"text-[20px] font-cairoBold leading-[30px] "}>{props.text}</div>;
}

export default TextComp;
