import React, { useRef, useState } from "react";

const Popup = (props) => {
  const [show, setShow] = useState(false);
  const modalRef = useRef();

  React.useEffect(() => {
    setShow(props.show);
  }, [props]);

  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);
  console.log(show);

  return (
    <div
      className={`modal modal-popup fade show ${show ? "d-block" : "d-none"}`}
      style={{ background: "rgba(0,0,0,0.75)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div ref={modalRef} className="modal-content text-center">
          <div className="modal-body">
            <button type="button" onClick={() => setShow(false)} className="btn-close"></button>
            <div className="row">
              <div className="col-md-12">
                <figure className="">
                  <img src={props.image} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
