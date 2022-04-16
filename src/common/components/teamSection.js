import React from "react";

const TeamSection = () => {
  return (
    <section className="wrapper bg-light wrapper-border">
      <div className="container py-14 py-md-16">
        <div className="row mb-3">
          <div className="col-md-10 col-lg-12 col-xl-10 col-xxl-9 mx-auto text-center">
            <h2 className="fs-15 text-uppercase text-muted mb-3">Our Team</h2>
            <h3 className="display-4 mb-7 px-lg-19 px-xl-18">
              Think unique and be innovative. Make a difference with Sandbox.
            </h3>
          </div>
        </div>
        <div className="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0">
          <div className="col-md-6 col-lg-3">
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
                  <img
                    className="img-fluid"
                    src="img/avatars/t1.jpg"
                    srcset="img/avatars/t1@2x.jpg 2x"
                    alt=""
                  />
                </figure>
                <div className="card-body px-6 py-5">
                  <h4 className="mb-1">Coriss Ambady</h4>
                  <p className="mb-0">Financial Analyst</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="position-relative">
              <div
                className="shape rounded bg-soft-red rellax d-md-block"
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
                  <img
                    className="img-fluid"
                    src="img/avatars/t2.jpg"
                    srcset="img/avatars/t2@2x.jpg 2x"
                    alt=""
                  />
                </figure>
                <div className="card-body px-6 py-5">
                  <h4 className="mb-1">Cory Zamora</h4>
                  <p className="mb-0">Marketing Specialist</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="position-relative">
              <div
                className="shape rounded bg-soft-green rellax d-md-block"
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
                  <img
                    className="img-fluid"
                    src="img/avatars/t3.jpg"
                    srcset="img/avatars/t3@2x.jpg 2x"
                    alt=""
                  />
                </figure>
                <div className="card-body px-6 py-5">
                  <h4 className="mb-1">Nikolas Brooten</h4>
                  <p className="mb-0">Sales Manager</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="position-relative">
              <div
                className="shape rounded bg-soft-violet rellax d-md-block"
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
                  <img
                    className="img-fluid"
                    src="img/avatars/t4.jpg"
                    srcset="img/avatars/t4@2x.jpg 2x"
                    alt=""
                  />
                </figure>
                <div className="card-body px-6 py-5">
                  <h4 className="mb-1">Jackie Sanders</h4>
                  <p className="mb-0">Investment Planner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
