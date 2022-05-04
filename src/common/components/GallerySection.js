import React from "react";
import Popup from "./Popup";

const GallerySection = () => {
  const [modal, setModal] = React.useState({});

  const galleryList = [
    { id: 1, image: "/assets/images/photos/1.jpg" },
    { id: 2, image: "/assets/images/photos/2.jpg" },
    { id: 3, image: "/assets/images/photos/2-2.jpg" },
    { id: 4, image: "/assets/images/photos/7.jpg" },
    { id: 5, image: "/assets/images/photos/11.jpg" },
    { id: 6, image: "/assets/images/photos/14.jpg" },
    { id: 8, image: "/assets/images/photos/19.jpg" },
    { id: 9, image: "/assets/images/photos/25.jpg" },
  ];

  const handleModalOpen = (show, image) => {
    setModal({
      show: true,
      image: image,
    });
  };

  return (
    <section className="wrapper bg-light">
      <div className="container pt-4 pt-md-4">
        <div className="row">
          <div className="col-lg-10 col-xxl-8">
            <h1 className="display-1 mb-0">Gallery Section</h1>
          </div>
        </div>
      </div>

      <div className="container py-6 py-md-6">
        <div className="grid grid-view projects-masonry">
          <div className="isotope-filter filter mb-10"></div>
          <div className="row gx-md-10 gy-10 gy-md-13 isotope">
            {galleryList.map((gallery) => {
              return (
                <div
                  onClick={() => handleModalOpen(true, gallery.image)}
                  key={gallery.id}
                  className="project item col-md-4 cursor-pointer"
                >
                  <figure className="lift rounded mb-6">
                    <img src={gallery.image} alt="" />
                  </figure>
                  {/* <div className="project-details d-flex justify-content-center flex-column">
                    <div className="post-header">
                      <div className="post-category text-line mb-3 text-purple">Cosmetic</div>
                      <h3 className="post-title">Cras Fermentum Sem</h3>
                    </div>
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Popup show={modal.show || false} image={modal.image || ""} />
    </section>
  );
};

export default GallerySection;
