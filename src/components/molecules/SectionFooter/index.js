import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <section className="mb-5 pt-5 px-4">
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="wrapper w-100 d-flex justify-content-between border-bottom-fade-black-1">
                <p className="mb-0">Let's stay in touch</p>
                <Link to="#">
                  <p className="mb-0">Subscribe</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 pt-5 px-4">
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-lg-12">
              <div className="wrapper w-100 d-flex justify-content-between">
                <Link to="#">
                  <i className="fas fa-3x fa-angle-left"></i>
                </Link>
                <Link to="#">
                  <i className="fas fa-3x fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 py-5 px-4">
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-lg-12 text-center">
              <p>
                View More:&nbsp;
                <Link to="#">
                  <u>Businness</u>
                </Link>
                ,{" "}
                <Link to="">
                  <u>Interview</u>
                </Link>
                ,{" "}
                <Link to="">
                  <u>New York</u>
                </Link>
                ,{" "}
                <Link to="">
                  <u>USA</u>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
