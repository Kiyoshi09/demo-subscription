import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TealiumTrackingRoutes } from "./components/atoms/TealiumTrackingRoutes";

import { Amplify } from "aws-amplify";
import config from "./aws-exports";

import "./index.scss";

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TealiumTrackingRoutes />
  </BrowserRouter>
);
