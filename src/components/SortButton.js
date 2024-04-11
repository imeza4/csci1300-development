import React from "react";

const SortButton = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default SortButton;