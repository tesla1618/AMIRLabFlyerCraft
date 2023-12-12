import React from "react";
import FeatherIcon from "feather-icons-react";
import "../css/Footer.css";
import amirLabLogo from "../assets/logo_white.png";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <aside>
          <img src={amirLabLogo} alt="AMIRLab Logo" width={210} />

          {/* <font style={{ color: "white" }}>A</font>dvanced <font style={{ color: "white" }}>M</font>achine <font style={{ color: "white" }}>I</font>ntelligence <font style={{ color: "white" }}>R</font>esearch <font style={{ color: "white" }}>Lab</font> */}
          <p className="font-bold text-lg mt-5">
            <span className="type-dark text-white" style={{ "--n": 100 }}>
              Advanced Machine Intelligence Research Lab
            </span>
          </p>
          <p className="amir-description text-justify">Established in 2020, the Advanced Machine Intelligence Research Lab (AMIR Lab) is a global non-profit academic consortium committed to promoting innovation and attaining research excellence. The AMIR Lab network comprises distinguished academics and scientists with affiliations to universities and industries spanning multiple continents.</p>
        </aside>
        <nav>
          <header className="footer-title">Get Social</header>
          <div className="amir-social-icons">
            <a className="amir-social-link facebook" href="https://facebook.com/amirlabbd">
              <FeatherIcon icon="facebook" />
            </a>
            <a className="amir-social-link twitter" href="https://x.com/amirlabbd">
              <FeatherIcon icon="twitter" />
            </a>
            <a className="amir-social-link linkedin" href="https://www.linkedin.com/company/advanced-machine-intelligence-research-lab-amirl/">
              <FeatherIcon icon="linkedin" />
            </a>
            <a className="amir-social-link github" href="https://github.com/AMIR-Lab-Bangladesh">
              <FeatherIcon icon="github" />
            </a>
          </div>
        </nav>
        <nav>
          <header className="footer-title">Contact</header>
          <ul className="list-none amir-contact-list">
            <li>
              <FeatherIcon icon="at-sign" size="14" className="mr-2" />
              <a href="mailto:contact@amirl.org">contact@amirl.org</a>
            </li>
            <li>
              <FeatherIcon icon="phone" size="14" className="mr-2" />
              <a href="tel:+8801674791594">+8801674791594</a>
            </li>
            <li>
              <FeatherIcon icon="globe" size="14" className="mr-2" />
              <a href="https://amirl.org">amirl.org</a>
            </li>
          </ul>
        </nav>
      </footer>
      <div className=" p-5 bg-neutral text-center text-neutral-content">Copyright © 2023 - All rights reserved</div>
    </>
  );
};

export default Footer;
