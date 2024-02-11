import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <Link to="">MIRRORLESS CAMERAS</Link>
      </li>
      <li>
        <Link to="">DSLR CAMERAS</Link>
      </li>
      <li>
        <Link to="">DIGITAL CAMERAS</Link>
      </li>
      <li>
        <Link to="">COMPACT CAMERAS</Link>
      </li>
      <li>
        <Link to="">FlIM CAMERAS</Link>
      </li>
      <li>
        <Link to="">CAMERA ACCESSORIES</Link>
      </li>
      <li>
        <Link to="">DSLR LENSES</Link>
      </li>
      <li>
        <Link to="">OTHERS ACCESSORIES</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <div className="">
            <Link to="/" className="">
              <img
                src="https://i.ibb.co/wMBthMV/cmera-resell-logo.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* {navItem} */}
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-96"
              />
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="font-bold">Login</Link>
          <Link to="/cart" className="font-bold">Cart</Link>
        </div>
      </div>

      {/* for nav item */}
      <div className="bg-green-50">
        <div className="navbar-center hidden md:hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">{navItem}</ul>
        </div>
      </div>
      {/* <div className="bg-green-50">
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 font-bold">{navItem}</ul>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
