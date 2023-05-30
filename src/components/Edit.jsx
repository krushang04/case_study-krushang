import React, { useContext, useEffect, useState } from "react";
import classes from "./Edit.module.css";
import Modal from "./Modal";
import Context from "../store/context";

function Edit(props) {
  const [name, setName] = useState(props.data.name);
  const [email, setEmail] = useState(props.data.email);
  const [phone, setPhone] = useState(props.data.phone);
  const [website, setWebsite] = useState(props.data.website);
  const [isError, setIsError] = useState(false);
  const ctx = useContext(Context);

  useEffect(() => {
    if (name === "" || email === "" || phone === "" || website === "")
      setIsError(true);
    else setIsError(false);
  }, [name, email, phone, website]);

  const saveHandler = () => {
    ctx.editData(props.data.id, name, email, phone, website);
    props.onClick();
  };

  return (
    <Modal onClick={props.onClick}>
      <div className={classes.title}>Edit User</div>
      <form className={classes.edit}>
        <div className={classes.field}>
          <label htmlFor="Name">Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="Email">Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="Phone">Phone: </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="Website">Website: </label>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
      </form>
      <div className={classes.actions}>
        <button onClick={props.onClick}>Cancel</button>
        <button disabled={isError} onClick={saveHandler}>
          OK
        </button>
      </div>
    </Modal>
  );
}

export default Edit;
