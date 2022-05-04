import React from "react";
import { Link } from "react-router-dom";

const NewsSection = (props) => {
  const Images = [
    {
      id: 1,
      src: "/assets/images/photos/1.jpg",
      title: "Opening Ceremony",
      link: "https://www.corporatebazar.com/agriculture-cooperative/12508.html",
      description:
        "Transactions of Sunbarshi Multi-Purpose Cooperative Society start from today....",
      date: "March 22, 2022 - 11:55 am",
      source: "corporatebazar.com",
    },
    {
      id: 2,
      src: "/assets/images/photos/2-2.jpg",
      title: "Opening Ceremony",
      link: "https://ratosurya.com/2022/03/4255/",
      description:
        "Transactions of Sunbarshi Multi-Purpose Cooperative Society start from today....",
      date: "March 20, 2022",
      source: "ratosurya.com",
    },
    {
      id: 3,
      src: "/assets/images/photos/25.jpg",
      title: "Opening Ceremony",
      description:
        "Transactions of Sunbarshi Multi-Purpose Cooperative Society start from today....",
      link: "https://www.arthapath.com/bank/2022/03/20/66873/",
      source: "arthapath.com",
      date: "March 20, 2022",
    },
    {
      id: 4,
      src: "/assets/images/photos/14.jpg",
      title: "Opening Ceremony",
      description:
        "Transactions of Sunbarshi Multi-Purpose Cooperative Society start from today....",
      link: "https://bankingkhabar.com/archives/105921",
      source: "bankingkhabar.com",
      date: "March 20, 2022",
    },
  ];

  return (
    <section className="wrapper bg-light wrapper-border">
      <div className="container py-08 py-md-12">
        <div className="row align-items-center mb-7">
          <div className="col-md-8 col-lg-8 col-xl-7 col-xxl-6 pe-lg-17">
            <h2 className="display-4 mb-3">Related News</h2>
            {/* <p className="lead fs-lg">We love to turn ideas into beautiful things.</p> */}
          </div>
        </div>
        <div className="row gy-6">
          {Images.splice(0, props.limit || Images.length).map((img, index) => {
            return (
              <div key={img.id} className="item col-md-6 col-lg-4">
                <figure className="rounded mb-6">
                  <img src={img.src} alt="" />
                </figure>
                <a href={img.link} target="_blank" rel="noreferrer">
                  <div className="project-details d-flex justify-content-center flex-column">
                    <div className="post-header">
                      <div className="post-category text-line mb-1 text-yellow">{img.title}</div>
                      <div className="post-category">{img.date}</div>
                      <p
                        className="post-title"
                        style={{ fontStyle: "italic", marginBottom: "0.5rem" }}
                      >
                        <u>{img.description}</u>
                      </p>
                      <p
                        className="post-title"
                        style={{ fontStyle: "italic", marginBottom: "0.5rem" }}
                      >
                        - {img.source}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
