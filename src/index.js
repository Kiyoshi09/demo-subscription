import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { TealiumTrackingRoutes } from "./components/atoms/TealiumTrackingRoutes";

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TealiumTrackingRoutes />
  </BrowserRouter>
);
