import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  const { main, subMain, child } = props;
  return (
    <section className="wrapper bg-dark">
      <div className="container pt-15 pb-15 pt-md-18 pb-md-15 text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-1 mb-3 text-white">{subMain}</h1>
            <nav className="d-inline-block" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item text-white">
                  <Link to="/">{main}</Link>
                </li>
                <li className="breadcrumb-item active text-white">{subMain}</li>
                {child && (
                  <li className="breadcrumb-item active text-white" aria-current="page">
                    {child}
                  </li>
                )}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
