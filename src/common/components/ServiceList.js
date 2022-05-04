import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const servicesList = [
  {
    title: "Deposit",
    icon: "uil-money-bill",
    description:
      "Sunbarshi Cooperative offers a wide range of deposit products that caters to your requirement. In order to expand community participation and to extend the program and the scope of the institute, it has been conducting limited banking transaction successfully since 2075 B.S. Ashwin after receiving license from Nepal Rastra Bank.",
    checkList: ["Daily saving", "Monthly Saving", "Education saving", "Optional Saving"],
  },
  {
    title: "Remittance",
    icon: "uil-usd-circle",
    description:
      "We provide various services for online money transfers. Our service is the best known, most secure and reliable online service. You can send or receive money within minute to/from other people around the globe. You pay the lowest fees in the market for your transfer. Recipients do not require a bank account to receive funds.",
    checkList: ["IME Remit", "Prabhu Remit", "Himal Remit", "Western union Remit"],
  },
  {
    title: "Loans",
    icon: "uil-invoice",
    description:
      "In cooperation with various consumer shops, discount cards are being provided to its members to save them from the rising inflation",
    checkList: ["Agriculture Loan", "Business Loan", "Career Loan", "Education Loan"],
  },
  {
    title: "Others",
    icon: "uil-star",
    description:
      "Engaged in promoting the use of compost gas as an alternative energy in order to mitigate environmental destruction and pollution.",
    checkList: [
      "Engaged in providing certain amount as relief loans to its members or their family members in case of sudden disaster or accident.",
      "In cooperation with various consumer shops, discount cards are being provided to its members to save them from the rising inflation.",
      "Continuously engaged in providing cooperative education to the members living in the premises of the organization.",
      "There is also a Member’s Relief Fund programme being run by the organization in the event of the death of its members. Under this, a deceased member’s family is provided a sum of Rs. 10,000 as expenses for posthumous rites.",
    ],
  },
];

const ServiceList = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="container py-14 py-md-16">
      {servicesList.map((service, index) => {
        return (
          <div
            id={service.title.toLowerCase()}
            key={index}
            className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center"
          >
            <div className={`col-lg-6 ${index % 2 !== 0 ? "order-lg-2" : ""} position-relative`}>
              <div
                className="shape bg-line leaf rounded-circle rellax w-17 h-17"
                data-rellax-speed="1"
                style={{ top: "-2rem", right: "-0.6rem" }}
              ></div>
              <div
                className="shape bg-pale-violet rounded-circle rellax w-17 h-17"
                data-rellax-speed="1"
                style={{ bottom: "-2rem", left: "-0.4rem" }}
              ></div>
              <figure className="rounded mb-0">
                {/* <img src="img/photos/se3.jpg" srcset="img/photos/se3@2x.jpg 2x" alt="" /> */}
                <div
                  className="icon btn btn-block"
                  style={{
                    fontSize: "15rem",
                    width: "100%",
                    maxWidth: "100%",
                    height: "100%",
                  }}
                >
                  <i className={`uil ${service.icon} text-primary`}></i>
                </div>
              </figure>
            </div>

            <div className="col-lg-6">
              <h3 className="display-4 mb-4">{service.title}</h3>
              <p className="mb-5">{service.description}</p>
              <div className="row gy-3">
                {service.checkList.map((check, cIndex) => {
                  return (
                    <div key={`${index}${cIndex}`} className="col-md-6">
                      <ul className="icon-list bullet-bg bullet-soft-leaf mb-0">
                        <li>
                          <span>
                            <i className="uil uil-check"></i>
                          </span>
                          <span>{check}</span>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
              <Link to="/services" className="btn btn-soft-aqua rounded-pill mt-6 mb-0">
                More Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceList;
