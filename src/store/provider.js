import { useEffect, useState } from "react";
// import axios from "axios";
import DUMMY_DATA from "../data.json";
import Context from "./context";

const Provider = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const API_ENDPOINT = "PASTE YOUR API HERE";

  // const fetchData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.get(API_ENDPOINT);
  //     setData(response.data);
  //     setIsLoading(false);
  //   } catch (err) {
  //     console.log("Error ocurred: ", err);
  //   }
  // };
  useEffect(() => {
    setIsLoading(true);
    setData(DUMMY_DATA);
    setIsLoading(false);

    // if there is an api then use below function
    // and comment out the above the code
    // and execute the fetchData function.
    // fetchData();
  }, []);

  const editDataHandler = (id, name, email, phone, website) => {
    let newData = data.slice();
    for (let i = 0; i < newData.length; ++i) {
      if (newData[i].id === id) {
        newData[i].name = name;
        newData[i].phone = phone;
        newData[i].email = email;
        newData[i].website = website;
        setData(newData);
      }
    }
  };
  const deleteHandler = (id) => {
    setData((prev) => prev.filter((user) => user.id !== id));
  };
  return (
    <Context.Provider
      value={{
        data: data,
        editData: editDataHandler,
        deleteData: deleteHandler,
        isLoading: isLoading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
