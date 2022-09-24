import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Registration } from "./pages/Registration";
import { SignIn } from "./pages/SignIn";
import { MovieMain } from "./pages/MovieMain";

import { Amplify } from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="registration" element={<Registration />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="moviemain" element={<MovieMain />} />
    </Routes>
  </BrowserRouter>
);
