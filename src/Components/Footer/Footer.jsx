import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer text-center">
        <div className="m-2">
          <div className="row text-white ">
            <div className="col-md-4 p-3">
              <h3 className="text-uppercase pt-4 ">location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 p-3 d-flex flex-column  align-items-center ">
              <h3 className=" pt-4">AROUND THE WEB</h3>
              <div className="icons">
                <i className="fa-brands fa-facebook mx-1 icon"></i>

                <i className="fa-brands fa-twitter mx-1 icon"></i>

                <i className="fa-brands fa-linkedin-in mx-1 icon"></i>

                <i className="fa-solid fa-globe mx-1 icon"></i>
              </div>
            </div>
            <div className="col-md-4 p-3 d-flex flex-column align-items-center">
              <h3 className=" pt-4">ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white end-footer text-center ">
        <p className=" pt-2  mb-3">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
