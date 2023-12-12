import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import JobFlyer from "./components/JobFlyer";

const Router = () => {
  return (
    <BrowserRouter basename="/AMIRLabFlyerCraft">
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/job" element={<JobFlyer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
