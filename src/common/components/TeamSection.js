import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ClientCarouselData } from "../data";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      img: "/assets/images/photos/t1.jpg",
      name: "Mr. Ganesh Kumar Ghimire",
      designation: "Chairman",
    },
    {
      id: 1,
      img: "/assets/images/photos/t2.jpg",
      name: "Mr. Parikram Parajuli",
      designation: "Vice-Chairman",
    },
    {
      id: 1,
      img: "/assets/images/photos/t3.jpg",
      name: "Mr. Bishnu Prasad Paudel",
      designation: "General Secretary",
    },
    {
      id: 1,
      img: "/assets/images/photos/t4.jpg",
      name: "Mr. Suraj Tamang",
      designation: "Treasurer",
    },
    {
      id: 1,
      img: "/assets/images/photos/t5.jpg",
      name: "Mrs. Salina Pradhan",
      designation: "Member",
    },
    {
      id: 1,
      img: "/assets/images/photos/t5.jpg",
      name: "Mrs. Manju Maharjan",
      designation: "Member",
    },
    {
      id: 1,
      img: "/assets/images/photos/t5.jpg",
      name: "Mrs. Pawan Pradhan",
      designation: "Member",
    },
  ];
  return (
    <section className="wrapper bg-light wrapper-border">
      <div className="container py-14 py-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-12 text-center">
            <h2 className="fs-20 text-uppercase text-primary mb-5">Meet the Team</h2>
            {/*   <h3 className="display-5 mb-5">
              Save your time and money by choosing our professional team.
            </h3>
            <p>
              Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros tempus porttitor.
            </p>
            <a href="/" className="btn btn-primary rounded-pill mt-3">
              See All Members
            </a> */}
          </div>

          <div className="col-lg-12 align-items-center justify-content-center row">
            {/* <Swiper
              spaceBetween={50}
              centeredSlidesBounds={true}
              centeredSlides={true}
              slidesPerView={3}
              loop={true}
              loopFillGroupWithBlank={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
              // navigation={true}
              modules={[Autoplay]}
              className=""
            > */}
            {teamMembers.map((team) => {
              return (
                <div className="item col-md-4 mb-2 text-center">
                  <img className="rounded-circle w-20 mx-auto mb-4" src={team.img} alt="" />
                  <h4 className="mb-1">{team.name}</h4>
                  <div className="meta mb-2"> {team.designation} </div>
                  {/* <p className="mb-2">Etiam porta sem magna malesuada mollis.</p> */}
                </div>
              );
            })}
            {/* </Swiper> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
