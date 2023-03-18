import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="primary">
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
      </div>
    </nav>
  );
}
export default Navbar;
