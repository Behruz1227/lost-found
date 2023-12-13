import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import 'react-toastify/dist/ReactToastify.css';

import Index from "./views/Index.js";
import Default from "./views/default";
import Found from "./views/examples/Found";
import Lost from "./views/examples/Lost";
import Login from "./views/examples/Login.js";
import Profile from "./views/examples/Profile.js";
import Register from "./views/examples/Register.js";
import Single from "./views/examples/Sngle";
import Code from "./views/examples/Code";
import About from "views/examples/about.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Default />} />
      <Route path="/home" exact element={<Index />} />
      <Route path="/found" exact element={<Found />} />
      <Route path="/lost" exact element={<Lost />} />
      <Route path="/single/about" exact element={<Single />} />
      <Route path="/login-page" exact element={<Login />} />
      <Route path="/profile" exact element={<Profile />} />
      <Route path="/register-page" exact element={<Register />} />
      <Route path="/code" exact element={<Code />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
