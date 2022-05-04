import React from "react";
import { Link } from "react-router-dom";

const StoryList = (props) => {
  return (
    <section className="wrapper bg-light">
      <div className="container pb-14 pt-14 pb-md-12 pt-md-12">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className={`blog classic-view ${props.disperse ? "" : "mt-n17"}`}>
              <article className="post">
                <div className="card">
                  <figure className="card-img-top overlay overlay1 hover-scale">
                    <a className="link-dark" href="/story-1">
                      <img src="/assets/images/photos/14.jpg" alt="" />
                    </a>
                    <figcaption>
                      <h5 className="from-top mb-0">Read More</h5>
                    </figcaption>
                  </figure>
                  <div className="card-body">
                    <div className="post-header">
                      <div className="post-category text-line">
                        <a href="/" className="hover" rel="category">
                          Opening Ceremony
                        </a>
                      </div>

                      <h2 className="post-title mt-1 mb-0">
                        <Link className="link-dark" to="/story-1">
                          Transactions of Sunbarshi Multi-Purpose Cooperative Society start from
                          today.
                        </Link>
                      </h2>
                    </div>

                    <div className="post-content">
                      <p>
                        Kathmandu. With the idea of ​​quality and sustainable cooperatives for
                        economic prosperity and social transformation, the objective is to help the
                        shareholders in the society in a simple and comfortable way to lead a modern
                        organized life. According to the Government of Nepal Cooperatives Act, 2074
                        BS, Bagmati Pradesh Cooperatives Act, 2076 BS, the working area of
                        ​​Kathmandu, Bhaktapur and Lalitpur districts has been established.
                      </p>
                    </div>
                  </div>

                  <div className="card-footer">
                    <ul className="post-meta d-flex mb-0">
                      <li className="post-date">
                        <i className="uil uil-calendar-alt"></i>
                        <span>March 20, 2022</span>
                      </li>
                      <li className="post-author">
                        <i className="uil uil-user"></i>
                        <span>By Sunbarshi</span>
                      </li>
                      <li className="post-comments">
                        <i className="uil uil-comment"></i>0<span> Comment</span>
                      </li>
                      <li className="post-likes ms-auto">
                        <i className="uil uil-heart-alt"></i>0
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryList;
