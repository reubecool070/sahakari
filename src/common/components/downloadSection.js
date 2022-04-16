import React, { useState } from "react";
import { Link } from "react-router-dom";
import { accordionData } from "../data";

const DownloadSection = () => {
  const [show, setShow] = useState(0);

  const handleShow = (index) => {
    if (index === show) {
      setShow(0);
    } else {
      setShow(index);
    }
  };

  const colorcode = ["#f26600", "#077430", "#d90000"];
  const download = [
    {
      id: 1,
      title: "Application for Periodic Deposit",
      link: "/assets/form/Application for Periodic deposit.pdf",
    },
    {
      id: 2,
      title: "Share Membership Form Personal",
      link: "/assets/form/Share membership Form_personal.pdf",
    },
    {
      id: 3,
      title: "KYM Form Personal",
      link: "/assets/form/KYM_Form_Personal.pdf",
    },
    {
      id: 4,
      title: "KYM Institutional Form",
      link: "/assets/form/corporate account opening form",
    },
    {
      id: 5,
      title: "Personal/Joint Account Opening Form",
      link: "/assets/form/Account open form_New Format_1",
    },
    {
      id: 6,
      title: "Institutional Account Opening Form",
      link: "/assets/form/Account open form_For company",
    },

    {
      id: 7,
      title: "Flyer Sunbarshi",
      link: "/assets/form/flyer sunbarsi.pdf",
    },
  ];

  return (
    <section id="toggle-accordion" className="wrapper bg-light py-6">
      <div className="container pt-2 pt-md-3 pb-2 pb-md-3">
        <div className="row text-center gy-6 mt-6 justify-content-center">
          {download.map((item, index) => {
            return (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card bg-pale-aqua card-hover " style={{ height: "320px" }}>
                  <div className="card-body cursor-pointer d-flex ">
                    <span className="divider"></span>
                    <div
                      className="d-flex flex-column justify-content-center align-items-center"
                      style={{ width: "100%" }}
                    >
                      <img src="assets/images/logo-removebg.png" className="" alt="" height={80} />
                      <h4 className="mt-4 text-center px-4"> {item.title} </h4>
                      {/* <p className="mb-2">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at
                  eget metus cras justo.
                </p> */}
                      <a href={item.link} download>
                        <i className="uil uil-download-alt" style={{ fontSize: "2rem" }}></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
