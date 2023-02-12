import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import Table from "react-bootstrap/Table";
import Search from "./Search";

const Listdata = () => {
  const { data } = useContext(UserContext);

  const [srcData, setSrcdata] = useState("");
  const [filfData, setFilfdata] = useState([]);

  const serchData = (src) => {
    setSrcdata(src);
  };

  useEffect(() => {
    setFilfdata(data);
  }, [data]);

  useEffect(() => {
    const fileteredData = data.filter((data) => {
      return Object.keys(data).some((key) =>
        data[key]
          .toString()
          .toLowerCase()
          .includes(srcData.toString().toLowerCase())
      );
    });
    // console.log(fileteredData);
    setFilfdata(fileteredData);
  }, [srcData, data]);
  return (
    <>
      <Search serchData={serchData} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {filfData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Listdata;
