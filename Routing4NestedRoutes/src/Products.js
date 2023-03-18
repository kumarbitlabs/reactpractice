import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function Products() {
  return (
    <div className="App">
      <h1>This is Products page</h1>
      <input type="search" placeholder="search items here" />
      <nav>
        <div>
          <NavLink to="featured">Featured</NavLink>
          <NavLink to="new">New</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
export default Products;
