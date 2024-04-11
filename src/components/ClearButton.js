import React from "react";

const ClearButton = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default ClearButton;