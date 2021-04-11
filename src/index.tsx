import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HttpService } from "./services/HttpService";
import FetchHttpService from "./services/FetchHttpService";

const httpService: HttpService = new FetchHttpService();

ReactDOM.render(
  <React.StrictMode>
    <App httpService={httpService} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
