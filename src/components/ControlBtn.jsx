import React from "react";
import { useDispatch } from "react-redux";

const ControlBtn = () => {
  // Use the useDispatch hooks to dispach an action
  const dispatch = useDispatch();
  const handleClickDecrementBtn = () => {
    // dispach an action with type INC
    dispatch({ type: "INC" });
  };
  const handleClickIncrementBtn = () => {
    // dispach an action with type DEC
    dispatch({ type: "DEC" });
  };
  const handleClickAddBtn = () => {
    // dispach an action with type ADD and payload 10
    // NB : you can use an object here like : {id: 10, name: 'test'} for exemple
    dispatch({ type: "ADD", payload: 10 });
  };
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <button onClick={handleClickIncrementBtn}>Increment</button>
      <button onClick={handleClickDecrementBtn}>Decrement</button>
      <button onClick={handleClickAddBtn}>Add 10</button>
    </div>
  );
};

export default ControlBtn;
