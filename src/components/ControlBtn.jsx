import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store";

const ControlBtn = () => {
  // Use the dispatch hooks to dispatch an action
  const dispatch = useDispatch();

  const handleClickDecrementBtn = () => {
    // Dispatch the decremnete action
    dispatch(actions.decremente());
  };
  const handleClickIncrementBtn = () => {
    dispatch(actions.increment());
  };
  const handleClickAddBtn = () => {
    dispatch(actions.add(10));
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
