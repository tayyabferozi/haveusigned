import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import HomeVideo from "../../components/HomeVideo";
import Features from "./Features";
// import Testimonials from "./Testimonials";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    setCardsData([
      {
        img: "./assets/images/categories/v2/birthday.png",
        title: "Birthday",
      },
      {
        img: "./assets/images/categories/v2/leaving.png",
        title: "Leaving",
      },
      {
        img: "./assets/images/categories/v2/new-baby.png",
        title: "New Baby",
      },
      {
        img: "./assets/images/categories/v2/wedding.png",
        title: "Wedding",
      },
      {
        img: "./assets/images/categories/v2/retirement.png",
        title: "Retirement",
      },
      {
        img: "./assets/images/categories/v2/new-home.png",
        title: "New Home",
      },
    ]);

    setIsLoading(false);
  }, []);

  return (
    <main className="container-wrap">
      <section className="space-top space-top-short-sm" id="hiw">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 px-0 px-sm-4 px-lg-12">
              <h1 className="text-center home-heading use-text-title2 mt-6 mb-7">
                Digital Greeting Cards for Groups
              </h1>
              <h5 className="use-text-subtitle2 text-center text-muted">
                Select, share and donate.
              </h5>

              <h6 className="mt-8 text-center">
                <strong>I want to create a new envelope for a...</strong>
              </h6>
              <div className="row justify-content-center home-category-icons">
                {!isLoading ? (
                  cardsData.map((el, idx) => {
                    const { img, title } = el;

                    return (
                      <div
                        key={"landing-cards" + idx}
                        className="col-12 col-lg-4 col-sm-6 text-center mb-4"
                      >
                        <Link to="/occasion/Ll7xmO">
                          <img src={img} alt={title} />
                          <span>{title}</span>
                        </Link>
                      </div>
                    );
                  })
                ) : (
                  <>
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span className="rounded-circle">&nbsp;</span>
                    </div>
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span className="rounded-circle">&nbsp;</span>
                    </div>
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span className="rounded-circle">&nbsp;</span>
                    </div>
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span className="rounded-circle">&nbsp;</span>
                    </div>
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span className="rounded-circle">&nbsp;</span>
                    </div>
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span className="rounded-circle">&nbsp;</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeVideo />
      <Features />
      {/* <Testimonials /> */}
    </main>
  );
};

export default Landing;
