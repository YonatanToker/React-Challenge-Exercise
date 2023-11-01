import React from "react";
import { useContext } from "react";
import { Context } from "../App";
const Arrow = ({ dir }) => {
  const {
    moveCheckedLeftToRight,
    moveCheckedRightToLeft,
    leftList,
    rightList,
  } = useContext(Context);
  const handleClick = () => {
    if (dir === "right") {
      moveCheckedLeftToRight();
    } else {
      moveCheckedRightToLeft();
    }
  };
  return (
    <button type="button" onClick={handleClick}>
      {dir === "right" ? ">" : "<"}
    </button>
  );
};

export default Arrow;
