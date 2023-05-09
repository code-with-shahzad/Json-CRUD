import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { apiData } from "../services/actions/Action";
const Api = () => {
  const dispatch = useDispatch();
  
  const callApi = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .catch((error) => {
        console.log(error);
      });
    dispatch(apiData(response.data));
  };

  useEffect(() => {
    callApi();
  });
  return <div></div>;
};

export default Api;
