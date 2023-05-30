import React, { useContext } from "react";
import Modal from "./Modal";
import classes from "./Delete.module.css";
import Context from "../store/context";

function Delete(props) {
  const ctx = useContext(Context);
  const deleteHandler = () => {
    ctx.deleteData(props.id);
    props.onClick();
  };
  return (
    <Modal onClick={props.onClick}>
      <div
        className={classes.text}
      >{`Are you sure you want to delete ${props.name}?`}</div>
      <div className={classes.actions}>
        <button onClick={props.onClick}>No</button>
        <button onClick={deleteHandler}>Yes</button>
      </div>
    </Modal>
  );
}

export default Delete;
