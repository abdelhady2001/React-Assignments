import React from "react";

export default function Portfolio() {
  return (
    <>
      <div className="mb-4 text-portfolio margin-portfolio">
        <div className="container">
          <h2 className=" text-uppercase pt-5 mb-3 fs-1 fw-bolder text-center">
            portfolio component
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <span className="line-portfolio me-3"></span>
            <i className="fa-solid fa-star text-portfolio"></i>
            <span className="line-portfolio ms-3"></span>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="position-relative rounded-3 overflow-hidden ">
                <img
                  className="w-100"
                  src="src\assets\Images\img_1.png"
                  alt="img_1"
                />
                <div className="portfolio-layer w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0 start-0 ">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="position-relative rounded-3 overflow-hidden ">
                <img
                  className="w-100"
                  src="src\assets\Images\img_2.png"
                  alt="img_2"
                />
                <div className="portfolio-layer w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0 start-0 ">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="position-relative rounded-3 overflow-hidden ">
                <img
                  className="w-100"
                  src="src\assets\Images\img_3.png"
                  alt="img_3"
                />
                <div className="portfolio-layer w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0 start-0 ">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="position-relative rounded-3 overflow-hidden ">
                <img
                  className="w-100"
                  src="src\assets\Images\img_1.png"
                  alt="img_1"
                />
                <div className="portfolio-layer w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0 start-0 ">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="position-relative rounded-3 overflow-hidden ">
                <img
                  className="w-100"
                  src="src\assets\Images\img_2.png"
                  alt="img_2"
                />
                <div className="portfolio-layer w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0 start-0 ">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="position-relative rounded-3 overflow-hidden ">
                <img
                  className="w-100"
                  src="src\assets\Images\img_3.png"
                  alt="img_3"
                />
                <div className="portfolio-layer w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0 start-0 ">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
