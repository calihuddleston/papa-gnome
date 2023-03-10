import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Stores from "./components/Stores";
import Calendar from "./components/Calendar";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/storefront" element={<Stores />}></Route>
          <Route path="/bookme" element={<Calendar />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
