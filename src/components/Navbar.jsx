import amirLabLogo from "../assets/logo2.png";
import { Link, NavLink } from "react-router-dom";

import React from "react";

const Navbar = () => {
  return (
    <>
      <>
        <div className="navbar bg-white sticky top-0 z-50 shadow-md">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <NavLink className="text-md" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-md" to="/job">
                    JobFlyer
                  </NavLink>
                </li>
                <li>
                  <a className="text-md" target="_blank" href="https://github.com/tesla1618/AMIRLabFlyerCraft">
                    Contribute
                  </a>
                </li>
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl">
              <img alt="AMIRLab" src={amirLabLogo} width={130} />
            </Link>
          </div>
        </div>
      </>
    </>
  );
};

export default Navbar;
