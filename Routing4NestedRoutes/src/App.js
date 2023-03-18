import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import OrderSummary from "./OrderSummary";
import NoMatch from "./NoMatch";
import Products from "./Products";
import FeaturedProducts from "./FeaturedProducts";
import NewProducts from "./NewProducts";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/OrderSummary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/products" element={<Products />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
