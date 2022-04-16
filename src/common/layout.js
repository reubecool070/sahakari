import React, { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link as ScrollLink } from "react-scroll";
import { MenuContext } from "../context/menu-text";
import "./css/style.css";
import "./css/plugins.css";
import "./css/custom.css";
// import MobileMenu from "../components/mobile-menu";

const Layout = ({ PageTitle, children }) => {
  const [scrollTop, setScrollTop] = useState(false);
  const elem = useRef();
  const { menuStatus } = useContext(MenuContext);

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [scrollTop]);

  return (
    <Fragment>
      <div ref={elem} className="content-wrapper">
        <Helmet>
          <title>{PageTitle} - Sunbarshi</title>
        </Helmet>
        <div id="wrapper">{children}</div>

        {/* {true === menuStatus ? <MobileMenu /> : null} */}
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          className={`progress-wrap ${scrollTop ? "active-progress" : ""}`}
        >
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                transition: "stroke-dashoffset 10ms linear 0s",
                strokeDasharray: "307.919, 307.919",
                strokeDashoffset: 0,
              }}
            />
          </svg>
          {/* <i className="uil uil-arrow-circle-up"></i> */}
        </ScrollLink>
      </div>
    </Fragment>
  );
};

export default Layout;
