import { Img1 } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section className="mb-5 pt-5 px-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="wrapper">
              <figure>
                <img
                  className="w-100 h-image-90vh grayscale mb-2"
                  src={Img1}
                  alt="image-1"
                />
                <figcaption>
                  <small>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur quo, fugit in soluta corrupti perspiciatis?
                  </small>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
