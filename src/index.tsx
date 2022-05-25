import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/styles/index.css";
import reportWebVitals from "./reportWebVitals";
import AxiosHttpService from "./services/httpService/AxiosHttpService";
import { HttpService } from "./services/httpService/HttpService";
import ShelterBuddyService from "./services/ShelterBuddyService";

const httpService: HttpService = new AxiosHttpService(
    "https://shelterbuddy.vercel.app"
);

const sbService: ShelterBuddyService = new ShelterBuddyService(httpService);

ReactDOM.render(
    <React.StrictMode>
        <App sbService={sbService} />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
