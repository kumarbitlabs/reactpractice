import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
