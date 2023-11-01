import React from "react";
import { useContext } from "react";
import { Context } from "../App";
const RightList = () => {
  const { rightList, setRightList } = useContext(Context);

  const handleCheckboxChange = (index) => {
    const updatedRightList = [...rightList];
    updatedRightList[index][1] = !updatedRightList[index][1];
    setRightList(updatedRightList);
  };
  return (
    <div className="list-container">
      <ul className="unordered-list">
        {rightList.map((item, index) => {
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

export default RightList;
