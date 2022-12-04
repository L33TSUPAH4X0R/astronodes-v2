import React from "react";
import Navbar from "./components/layout/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import classes from "./App.css";
import Home from "./pages";
import Team from "./pages/Team";
import Explorer from "./pages/Explorer";
import Projects from "./pages/Projects";
import Stake from "./pages/Stake";

function App() {
  return (
    <Router>
      <header className={classes["header"]}>
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/stake" element={<Stake />} />
      </Routes>
    </Router>
  );
}

export default App;
