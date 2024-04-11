import React from "react";

const FilterButton = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default FilterButton;