import React, { useState } from "react";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  return (
    <>
      <div className="mb-4 text-contact margin-contact">
        <h2 className="text-uppercase pt-5 mb-3 fs-1 fw-bolder text-center">
          conatct section
        </h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <span className="line-portfolio me-3"></span>
          <i className="fa-solid fa-star text-portfolio"></i>
          <span className="line-portfolio ms-3"></span>
        </div>
        <form className="w-50 p-3 mx-auto mt-5">
          <div className="userName overflow-hidden">
            <p
              className={`${
                userName ? "translate-y-0" : "translate-y"
              } p-float`}
            >
              userName:
            </p>
          </div>
          <input
            id="userName"
            type="text"
            placeholder="userName"
            className="w-100 form-control border-0 border-bottom py-3"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <div className="userAge overflow-hidden">
            <p
              className={`${userAge ? "translate-y-0" : "translate-y"} p-float`}
            >
              userAge:
            </p>
          </div>
          <input
            id="userAge"
            type="text"
            placeholder="userAge"
            className="w-100 form-control border-0 border-bottom py-3"
            onChange={(e) => {
              setUserAge(e.target.value);
            }}
          />
          <div className="userEmail overflow-hidden">
            <p
              className={`${
                userEmail ? "translate-y-0" : "translate-y"
              } p-float`}
            >
              userEmail:
            </p>
          </div>
          <input
            id="userEmail"
            type="text"
            placeholder="userEmail"
            className="w-100 form-control border-0 border-bottom py-3"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <div className="userPassword overflow-hidden">
            <p
              className={`${
                userPassword ? "translate-y-0" : "translate-y"
              } p-float`}
            >
              userPassword:
            </p>
          </div>
          <input
            id="userPassword"
            type="text"
            placeholder="userPassword"
            className="w-100 form-control border-0 border-bottom py-3"
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
          <button className="btn btn-form mt-4 text-white">send Message</button>
        </form>
      </div>
    </>
  );
}
