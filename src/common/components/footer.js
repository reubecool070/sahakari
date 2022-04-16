import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-inverse">
      <div className="container pt-17 pt-md-19 pb-13 pb-md-15">
        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <img className="mb-4" height={30} src="/assets/images/logo4.jpg" alt="" />
              <p className="mb-4">
                © 2021 Sunbarshi. <br className="d-none d-lg-block" />
                All rights reserved.
              </p>
              <nav className="nav social social-white">
                {/* <Link to="/">
                  <i className="uil uil-twitter"></i>
                </Link> */}
                <Link to="/https://www.facebook.com/smcl2078">
                  <i className="uil uil-facebook-f"></i>
                </Link>
                {/* <Link to="/">
                  <i className="uil uil-instagram"></i>
                </Link>
                <Link to="/">
                  <i className="uil uil-youtube"></i>
                </Link> */}
              </nav>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Get in Touch</h4>
              <address className="pe-xl-15 pe-xxl-17">Samakhusi-26, Kathmandu, Nepal</address>
              <Link to="mailto:smcl.2078@gmail.com">smcl.2078@gmail.com</Link>
              <br /> +977-01-4360764
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Learn More</h4>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/">Our Story</Link>
                </li>
                <li>
                  <Link to="/">Projects</Link>
                </li>
                <li>
                  <Link to="/">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-12 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Our Newsletter</h4>
              <p className="mb-5">
                Subscribe to our newsletter to get our news & deals delivered to you.
              </p>
              <div className="newsletter-wrapper">
                <div id="mc_embed_signup2">
                  <form>
                    <div id="mc_embed_signup_scroll2" />
                    <div className="mc-field-group input-group form-label-group">
                      <input
                        type="email"
                        name="EMAIL"
                        className="required email form-control"
                        placeholder="Email Address"
                        id="mce-EMAIL2"
                      />
                      <label htmlFor="mce-EMAIL2">Email Address</label>
                      <input
                        type="button"
                        value="Join"
                        name="subscribe"
                        id="mc-embedded-subscribe2"
                        className="btn btn-primary"
                      />
                    </div>
                  </form>

                  <div id="mce-responses2" className="clear">
                    <div
                      className="response"
                      id="mce-error-response2"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response2"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                  <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                    <input
                      type="text"
                      name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                      tabIndex="-1"
                    />
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
