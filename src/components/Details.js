import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import "../details.css";
// import Api from "./Api";

const Details = () => {
  const data = useSelector((state) => state.ApiData.apiData);
  const [val , setVal] = useState(data)

  const del = (id) => {
    val.splice(id,1)
    setVal([...val])
  };

  return (
    <Table bordered hover className="bg-light">
      <thead className="table-dark">
        <tr>
          <th>Userid</th>
          <th>Id</th>
          <th>Tittle</th>
          <th>Body</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {val.map((e, id) => {
          return (
            <tr key={e.id}>
              <td>{e.userId}</td>
              <td>{e.id}</td>
              <td>{e.title}</td>
              <td>{e.body}</td>
              <td>
                <Button className="btn btn-danger" onClick={() => del(id)}>
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Details;
