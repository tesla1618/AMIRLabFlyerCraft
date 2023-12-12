import amirLabLogo from "../assets/logo2.png";
import { Link } from "react-router-dom";

import React from "react";

const Navbar = () => {
  return (
    <>
      <>
        <div className="navbar bg-white sticky top-0 z-50 shadow-md">
          <div className="navbar-start">
            <Link to="/" className="btn btn-ghost text-xl">
              <img alt="AMIRLab" src={amirLabLogo} width={130} />
            </Link>
          </div>
          <div className="navbar-end mr-10 text-dark">AMIRLab FlyerCraft</div>
        </div>
      </>
    </>
  );
};

export default Navbar;
