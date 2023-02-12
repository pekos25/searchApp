import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createContext, useState, useEffect } from "react";
import Listdata from "./components/Listdata";
import axios from "axios";

export const UserContext = createContext();

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    //   setData(res.data);
    // });
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <UserContext.Provider value={{ data }}>
      <Listdata />
    </UserContext.Provider>
  );
}

export default App;
