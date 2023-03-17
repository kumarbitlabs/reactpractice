import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>&nbsp; &nbsp; &nbsp;
      <Link to="/about">About</Link>
    </nav>
  );
}
export default Navbar;