import "./App.css";
import { useContext, createContext, useState } from "react";
import { Arrow, LeftList, RightList } from "./Components/index";
export const Context = createContext();
function App() {
  const [leftList, setLeftList] = useState([
    [1, false],
    [2, false],
    [3, false],
    [4, false],
  ]);
  const [rightList, setRightList] = useState([]);
  const moveCheckedLeftToRight = () => {
    const updatedLeftList = leftList.filter((item) => !item[1]);
    const checkedItems = leftList.filter((item) => item[1]);
    checkedItems.map((item) => (item[1] = false));
    setLeftList(updatedLeftList);
    setRightList((prevList) => [...prevList, ...checkedItems].sort());
  };
  const moveCheckedRightToLeft = () => {
    const updatedRightList = rightList.filter((item) => !item[1]);
    const checkedItems = rightList.filter((item) => item[1]);
    checkedItems.map((item) => (item[1] = false));
    setRightList(updatedRightList);
    setLeftList((prevList) => [...prevList, ...checkedItems].sort());
  };
  console.log("leftList:" + leftList);
  console.log("rightList:" + rightList);
  const context = {
    leftList,
    setLeftList,
    rightList,
    setRightList,
    moveCheckedLeftToRight,
    moveCheckedRightToLeft,
  };
  return (
    <main>
      <div className="main-container">
        <Context.Provider value={context}>
          <LeftList />
          <Arrow dir="right" />
          <Arrow dir="left" />
          <RightList />
        </Context.Provider>
      </div>
    </main>
  );
}

export default App;
