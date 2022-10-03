import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

// import App from "./App";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Registration } from "./pages/Registration";
// import { SignIn } from "./pages/SignIn";
// import { MovieMain } from "./pages/MovieMain";

import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { TealiumTrackingRoutes } from "./components/atoms/TealiumTrackingRoutes";

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TealiumTrackingRoutes />
      {/* <Routes>
        <Route path="/" element={<App />} />
        <Route path="registration" element={<Registration />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="moviemain" element={<MovieMain />} />
      </Routes> */}
  </BrowserRouter>
);
