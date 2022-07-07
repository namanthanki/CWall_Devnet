// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import './index.css';
import App from "./App";

const Navbar = lazy(() => import("./components/Navbar/Navbar"))
const Home = lazy(() => import("./routes/Home"));
const Create = lazy(() => import("./routes/Create"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

export const Router: FC = () => {
  return(
    <React.StrictMode>
      <Navbar />
      <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}