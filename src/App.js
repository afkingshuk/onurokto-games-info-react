import React from "react";
//components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//style
import GlobalStyles from "./components/GlobalStyles";
//routes
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello Onurokto Gamers</h1> */}
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
