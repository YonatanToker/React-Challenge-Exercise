import React from "react";
import { useContext } from "react";
import { Context } from "../App";
const LeftList = () => {
  const { leftList, setLeftList } = useContext(Context);

  const handleCheckboxChange = (index) => {
    const updatedLeftList = [...leftList];
    updatedLeftList[index][1] = !updatedLeftList[index][1];
    setLeftList(updatedLeftList);
  };
  return (
    <div className="list-container">
      <ul className="unordered-list">
        {leftList.map((item, index) => {
          return (
            <li>
              <input
                type="checkbox"
                id={item[0]}
                checked={item[1]}
                onChange={() => handleCheckboxChange(index)}
              />
              <label htmlFor={item[0]}>{item[0]}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftList;
