import React from "react";
import { Link, Outlet} from "react-router-dom";

export const Product = () => {
  return (
    <>
      <div>
        <input
          type="search"
          placeholder="search product"
        />
      </div>
      <nav>
        <Link to='featured-products'> Featured <br /></Link>
        <Link to='new-products'>New</Link>
      </nav>
      <Outlet/>
    </>
  );
};
