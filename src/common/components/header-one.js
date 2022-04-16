import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../../context/menu-text";
import logo from "../images/logo4.jpg";

const HeaderOne = () => {
  const [sticky, setSticky] = useState(false);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <header className="wrapper bg-dark">
      <nav
        className={`navbar center-nav transparent navbar-expand-lg navbar-dark ${
          true === sticky
            ? " stricky stricky-fixed slideInDown animated"
            : " stricky slideIn animated"
        }`}
      >
        <div className="container flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100">
            <Link to="/">
              <img src={logo} height={40} className="logo-light" alt="" />
            </Link>
            <span className="mobile-menu__toggler" onClick={handleMenuClick}>
              <i className="fa fa-bars"></i>
            </span>
          </div>
          <div className="navbar-collapse offcanvas-nav">
            <div className="offcanvas-header d-lg-none d-xl-none">
              <Link to="/">
                <img src="img/logo-light.png" alt="" />
              </Link>
              <button
                type="button"
                className="btn-close btn-close-white offcanvas-close offcanvas-nav-close"
                aria-label="Close"
              ></button>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  News
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  Investor Relations
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/download">
                  Downloads
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Loan Form
                </Link>
              </li>
              <ul className="navbar-nav flex-row align-items-center ms-auto" data-sm-skip="true">
                <li className="nav-item d-none d-md-block">
                  <Link to="/" className="nav-link btn btn-sm btn-primary rounded">
                    Contact
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderOne;
