import React from "react";
import ReactDOM from "react-dom/client";
//import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Introduce from "./Introduce";
import Topics from "./Topics";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <HashRouter>
     <Routes>
        <Route path="/" element={<App />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/Topics" element={<Topics />} />
      </Routes>
    </HashRouter>
     
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
