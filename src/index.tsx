import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import { Layout } from "./layout";
import { Landing } from "./pages/landing/landing";
import { Form } from "./pages/form/form";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="airdrop" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>
);

reportWebVitals();
