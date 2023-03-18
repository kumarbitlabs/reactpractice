import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import OrderSummary from "./OrderSummary";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/OrderSummary" element={<OrderSummary />} />
      </Routes>
    </div>
  );
}
export default App;
