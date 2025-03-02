import React from "react";

export default function About() {
  return (
    <>
      <div className=" d-flex flex-column justify-content-center align-items-center text-white bg-home margin-home">
        <div className=" container">
          <h2 className=" text-uppercase mb-3 fs-1 fw-bolder text-center">
            about component
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <span className="line me-3"></span>
            <i className="fa-solid fa-star text-white"></i>
            <span className="line ms-3"></span>
          </div>
          <div className="container">
            <div className="row px-5">
              <div className="col-md-6 ps-md-5">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6 pe-5">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
