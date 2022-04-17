import React, { useState } from "react";
import { Link } from "react-router-dom";

const navbarData = [
  { id: 1, title: "Home", link: "/", children: [] },
  { id: 2, title: "About Us", link: "/about", children: [] },
  { id: 7, title: "Services", link: "/services", children: [] },
  { id: 3, title: "News", link: "/news", children: [] },
  { id: 4, title: "Investor Relations", link: "/investor-relations", children: [] },
  { id: 5, title: "Downloads", link: "/download", children: [] },
  { id: 6, title: "Careers", link: "/careers", children: [] },
  // { id: 7, title: "Loan Form", link: "/", children: [] },
];

const HeaderTwo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  // navbar center-nav transparent position-absolute navbar-expand-lg navbar-dark caret-none
  return (
    <header className="wrapper bg-soft-primary">
      <nav className="navbar center-nav transparent position-absolute navbar-expand-lg navbar-dark ">
        <div className="container flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100">
            <Link to="/">
              <img src="/assets/images/logo4.jpg" className="responsive-logo" alt="" />
            </Link>
          </div>
          {/* oopen here */}
          <div className={`navbar-collapse offcanvas-nav ${menuOpen ? "open" : ""}`}>
            <div className="offcanvas-header d-lg-none d-xl-none">
              <Link to="/">
                <img src="/assets/images/logo4.jpg" height={20} width={200} alt="" />
              </Link>
              <button
                type="button"
                className="btn-close btn-close-white offcanvas-close offcanvas-nav-close"
                aria-label="Close"
                onClick={() => handleMenuOpen()}
              ></button>
            </div>
            <ul className="navbar-nav">
              {navbarData.map((item) => {
                return (
                  <li key={item.id} className="nav-item">
                    <Link className="nav-link" to={item.link}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="navbar-other w-100 d-flex ms-auto">
            <ul className="navbar-nav flex-row align-items-center ms-auto" data-sm-skip="true">
              {/* <li className="nav-item dropdown language-select text-uppercase">
                <Link
                  className="nav-link dropdown-item dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  En
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link className="dropdown-item" to="#">
                      En
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="#">
                      Ne
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="#">
                      Es
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item d-none d-md-block">
                <Link to="/contact" className="btn btn-sm btn-primary rounded-pill">
                  Contact
                </Link>
              </li>
              <li className="nav-item d-lg-none">
                <div className="navbar-hamburger">
                  <button
                    className={`hamburger animate plain ${menuOpen ? "active" : ""}`}
                    onClick={() => handleMenuOpen()}
                    data-toggle="offcanvas-nav"
                  >
                    <span></span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderTwo;
