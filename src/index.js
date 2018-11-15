import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<AppRouter />, rootElement);
