import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HttpService } from "./services/httpService/HttpService";
import FetchHttpService from "./services/httpService/FetchHttpService";
import ShelterBuddyService from "./services/ShelterBuddyService";

const httpService: HttpService = new FetchHttpService(
  // "https://shelterbuddy-us-uat.shelterbuddy.io"
  "http://localhost:3000"
);

const sbService: ShelterBuddyService = new ShelterBuddyService(httpService);

ReactDOM.render(
  <React.StrictMode>
    <App sbService={sbService} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
