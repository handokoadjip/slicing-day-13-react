import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section className="mb-0 pt-0 px-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="wrapper w-100">
              <p className="text-uppercase">INTERVIEW / USA</p>
              <p>12 march, 2017</p>
              <p>Interview: Anna Soekastra</p>
              <p className="mb-5">Photography: Calvin Tech</p>

              <p>
                <Link to="#">
                  <u>Businness</u>
                </Link>
                ,&nbsp;
                <Link to="#">
                  <u>Interview</u>
                </Link>
                ,&nbsp;
                <Link to="#">
                  <u>New York</u>
                </Link>
                ,&nbsp;
                <Link to="#">
                  <u>USA</u>
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="wrapper w-100">
              <p className="fw-medium">
                <i>
                  Three years ago, at midnight, I received a phone call with a
                  212 area code. The voice on the other end was upbeat and
                  friendly, with a strong New York accent. It was MacKenzie
                  Fraser-Bub who, that night, became my literary agent, ‘She has
                  read my most ‘personal stories, questioning every last
                  sentence to make each one better. Although I have only met her
                  in person twice, in some ways, this woman may know more about
                  me than some of my closest friends.
                </i>
              </p>
              <p className="fw-medium">
                <i>
                  Today | turned the tables on MacKenzie. Born and bred in
                  Manhattan, 1 asked her to tell me more about her life in the
                  Big Apple: from growing up in a closet, to living in the
                  centre of the publishing industry. She told me about the
                  importance of place in the hoards of manuscripts she receives
                  and the secret spot in the upper east side that she loves
                  most.
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
