import React from "react";
import { Link } from "react-router-dom";

const SliderOne = () => {
  return (
    <section className="wrapper bg-dark angled lower-start">
      <div className="container pt-7 pt-md-11 pb-8">
        <div className="row gx-0 gy-10 align-items-center">
          <div
            className="col-lg-6"
            // data-cues="slideInDown"
            // data-group="page-title"
            // data-delay="600"
          >
            <h1 className="display-1 text-white mb-4 text-white">
              Sunbarshi focuses on <br />
              <span
                className="typer text-primary text-nowrap"
                // data-delay="100"
                // data-delim=":"
                // data-words="customer satisfaction:business needs:creative ideas"
              >
                customer satisfaction
              </span>
              <span className="cursor text-primary" data-owner="typer"></span>
            </h1>
            <p className="lead fs-24 lh-sm text-white mb-7 pe-md-18 pe-lg-0 pe-xxl-15">
              We provide quality service to member using modern tools and technology.
            </p>
            <div>
              <Link to="/" className="btn btn-lg btn-primary rounded">
                Get Started
              </Link>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1 mb-n18">
            <div className="position-relative light-gallery-wrapper">
              <figure className="rounded shadow-lg">
                <img src="" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderOne;
