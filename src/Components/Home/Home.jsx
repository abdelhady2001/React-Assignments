import React from "react";

export default function Home() {
  return (
    <>
      <div className=" d-flex flex-column justify-content-center align-items-center margin-home bg-home ">
        <img className="img-home" src="src\assets\Images\Avatar.svg" alt />
        <div className="text-center pt-4">
          <h2 className="text-white text-uppercase mb-3 fs-1 fw-bolder">
            start framework
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <span className="line me-3"></span>
            <i className="fa-solid fa-star text-white"></i>
            <span className="line ms-3"></span>
          </div>
        </div>
        <p className="text-white">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}
