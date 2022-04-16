import React from "react";

const CareerSection = () => {
  return (
    <section className="wrapper bg-light wrapper-border">
      <div className="container py-14 py-md-16">
        <div className="row mb-3">
          <div className="col-md-10 col-lg-12 col-xl-10 col-xxl-9 mx-auto text-center">
            <h2 className="fs-15 text-uppercase text-muted mb-3">Careers In Sunbarshi</h2>
            <h3 className="display-4 mb-7 px-lg-19 px-xl-18">
              Think unique and be innovative. Make a difference with Sunbarshi.
            </h3>
            <p className="display-3">Hiring - Closed</p>
          </div>
        </div>
        <div className="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0">
          <div className="col-md-12 col-lg-12">
            <div className="position-relative">
              <div
                className="shape rounded bg-soft-blue rellax d-md-block"
                data-rellax-speed="0"
                style={{
                  bottom: "-0.75rem",
                  right: "-0.75rem",
                  width: "98%",
                  height: "98%",
                  zIndex: 0,
                }}
              ></div>
              <div className="card">
                <figure className="card-img-top">
                  <img className="img-fluid" src="/assets/images/photos/career.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
