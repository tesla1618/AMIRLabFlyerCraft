import amirLabLogo from "../assets/logo_white.png";
import { Link } from "react-router-dom";

import React from "react";

const Navbar = () => {
  return (
    <>
      <>
        <div className="navbar bg-sky-600 shadow-md">
          <div className="navbar-start">
            <Link to="/" className="btn btn-ghost text-xl">
              <img alt="AMIRLab" src={amirLabLogo} width={120} />
            </Link>
          </div>
          <div className="navbar-end mr-10 text-white">AMIRLab FlyerCraft</div>
        </div>
      </>
    </>
  );
};

export default Navbar;
