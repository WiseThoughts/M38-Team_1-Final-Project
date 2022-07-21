import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./pages/app/App";
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export const updateFetch = async (filterObj, updateObj, setter) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        filterObj,
        updateObj,
      }),
    });
    const data = await res.json();
    if (data.msg !== "Successfully Updated") {
      throw new Error(data.msg);
    }
    if (updateObj.username) {
      setter(updateObj.username);
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteFetch = async (setter) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "DELETE",
      headers: { Authorization: localStorage.getItem("myToken") },
    });
    const data = await res.json();
    if (data.msg !== "Successfully Deleted") {
      throw new Error(data.msg);
    } else {
      setter();
    }
  } catch (error) {
    console.log(error);
  }
};


