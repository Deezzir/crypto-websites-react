import React from "react";

const DateTimeDisplay = (props: any) => {
  return (
    <div className={props.isDanger ? "countdown danger" : "countdown"}>
      <p>{props.value}</p>
      <span>{props.type}</span>
    </div>
  );
};

export default DateTimeDisplay;
