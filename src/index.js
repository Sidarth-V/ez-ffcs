import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./index.scss";
import { getDataFromSheet } from "./api/api.main";

const root = ReactDOM.createRoot(document.getElementById("root"));

const start = async () => {
  let spreadsheetId = "1aTgWUGRgZosDA7e908AdpSlZPFMWbjep9fExgl_dQ1o";
  let sheetName = "Sheet1";
  await getDataFromSheet(spreadsheetId, sheetName);
  root.render(
    <React.StrictMode>
      <ToastContainer />
      <App />
    </React.StrictMode>
  );
};

start();
