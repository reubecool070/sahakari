import React from "react";

const ContactSection = () => {
  return (
    <div>
      <section className="wrapper bg-light wrapper-border">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7">
              <figure>
                <img className="w-auto" src="/assets/images/concept8.png" alt="" />
              </figure>
            </div>

            <div className="col-lg-5">
              <h2 className="fs-15 text-uppercase text-line text-primary text-center mb-3">
                Get In Touch
              </h2>
              <h3 className="display-5 mb-7">Got any questions? Don't hesitate to get in touch.</h3>
              <div className="d-flex flex-row">
                <div>
                  <div className="icon text-primary fs-28 me-4 mt-n1">
                    <i className="uil uil-location-pin-alt"></i>
                  </div>
                </div>
                <div>
                  <h5 className="mb-1">Address</h5>
                  <address>Samakhusi-26, Kathmandu, Nepal</address>
                </div>
              </div>
              <div className="d-flex flex-row">
                <div>
                  <div className="icon text-primary fs-28 me-4 mt-n1">
                    <i className="uil uil-phone-volume"></i>
                  </div>
                </div>
                <div>
                  <h5 className="mb-1">Phone</h5>
                  <p>+977-01-4360764</p>
                </div>
              </div>
              <div className="d-flex flex-row">
                <div>
                  <div className="icon text-primary fs-28 me-4 mt-n1">
                    <i className="uil uil-envelope"></i>
                  </div>
                </div>
                <div>
                  <h5 className="mb-1">E-mail</h5>
                  <p className="mb-0">
                    <a href="mailto:smcl.2078@gmail.com" className="link-body">
                      smcl.2078@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
