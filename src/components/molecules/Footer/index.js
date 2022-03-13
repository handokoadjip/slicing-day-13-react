import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer className="py-5 px-4 border-top-fade-black-1">
      <div className="container-fluid">
        <div className="row w-100 pt-5">
          <div className="col-lg-2 mb-5 mb-lg-0">
            <div className="wrapper text-center text-lg-start">
              <nav>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  About
                </Link>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Events
                </Link>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Contacts
                </Link>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Contribtions
                </Link>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Advertising
                </Link>
              </nav>
            </div>
          </div>
          <div className="col-lg-2 mb-5 mb-lg-0">
            <div className="wrapper text-center text-lg-start">
              <nav>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Facebook
                </Link>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Instagram
                </Link>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Twitter
                </Link>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Pinterest
                </Link>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  LinkedIn
                </Link>
              </nav>
            </div>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0 ms-auto">
            <div className="wrapper text-center d-flex flex-column justify-content-between h-100">
              <h3 className="fs-6 fw-medium text-fade-black-1 mb-4 text-center text-lg-end">
                Lorem ipsum dolor sit amet.
                <br />
                Lorem, ipsum dolor.
              </h3>
              <form action="">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Let's stay in touch"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
