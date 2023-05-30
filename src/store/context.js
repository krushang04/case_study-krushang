import React, { useState } from "react";
import DUMMY_DATA from "../data.json";

const Context = React.createContext({
  data: DUMMY_DATA,
  editData: (id, name, email, phone, website) => {},
  deleteData: (id) => {},
});

export default Context;
