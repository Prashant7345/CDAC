import React from "react";
import ReactDOM from 'react-dom/client';

import './css/style.css';

import Contact from './components/Contact';
import Footer from "./components/Footer";
import Header from "./components/Header";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Adduser from "./components/Adduser";
import Showuser from "./components/Showuser";
import Lifecycle from "./components/Lifecycle";
import Lifecycle1 from "./components/Lifecycle1";
import Parent from "./components/Parent";

//http://localhost:3000/
//http://localhost:3000/aboutpage
//https://en.wikipedia.org/wiki/Single-page_application
//https://reactrouter.com/docs/en/v6/getting-started/overview
var record = (
  <BrowserRouter>
    <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutpage" element={<About />} />
          <Route path="/add-user" element={<Adduser />} />
          <Route path="/show-user" element={<Showuser />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/lifecycle" element={<Lifecycle />} />
          <Route path="/lifecycle1" element={<Lifecycle1 />} />
          <Route path="/parent-child" element={<Parent />} />
      </Routes>
    <Footer />
  </BrowserRouter>
);

var target = ReactDOM.createRoot(document.querySelector('#root'));
target.render(record);

