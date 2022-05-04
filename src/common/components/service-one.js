import React from "react";
import { Link } from "react-router-dom";
import { servicesList } from "./ServiceList";

const ServiceOne = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container pt-12 pt-md-16 pb-1 pb-md-1">
        <div className="row">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="fs-16 text-uppercase text-line text-primary mb-3">What We Do?</h2>
            <h3 className="display-4 mb-9">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
        </div>
        <div className="row gx-md-8 gy-8 mb-4 mb-md-4">
          {servicesList.map((service, index) => {
            return (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="icon btn btn-block btn-lg btn-soft-primary mb-6">
                  <i className="uil uil-money-bill text-white"></i>
                </div>
                <h4>{service.title}</h4>
                <p className="mb-3">{service.description.substring(0, 150)}...</p>
                <Link
                  type="button"
                  to={`/services#${service.title.toLowerCase()}`}
                  className="more hover link-primary"
                >
                  Learn More
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
