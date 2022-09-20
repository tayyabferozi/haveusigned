import React from "react";

import HomeVideo from "../../components/HomeVideo";
import Features from "./Features";
// import Testimonials from "./Testimonials";

const Landing = () => {
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
              <div class="row justify-content-center home-category-icons">
                <div class="col-12 col-lg-4 col-sm-6 text-center mb-4">
                  <a href="occasion/Ll7xmO">
                    <img
                      src="./assets/images/categories/v2/birthday.png"
                      alt="birthday"
                    />
                    <span>Birthday</span>
                  </a>
                </div>
                <div class="col-12 col-lg-4 col-sm-6 text-center mb-4">
                  <a href="occasion/6lZvl1">
                    <img
                      src="./assets/images/categories/v2/leaving.png"
                      alt="leaving"
                    />
                    <span>Leaving</span>
                  </a>
                </div>
                <div class="col-12 col-lg-4 col-sm-6 text-center mb-4">
                  <a href="occasion/VjXO9Q">
                    <img
                      src="./assets/images/categories/v2/new-baby.png"
                      alt="baby"
                    />
                    <span>New Baby</span>
                  </a>
                </div>
                <div class="col-12 col-lg-4 col-sm-6 text-center mb-4">
                  <a href="occasion/69N8lx">
                    <img
                      src="./assets/images/categories/v2/wedding.png"
                      alt="wedding"
                    />
                    <span>Wedding</span>
                  </a>
                </div>
                <div class="col-12 col-lg-4 col-sm-6 text-center mb-4">
                  <a href="occasion/VjRGl7">
                    <img
                      src="./assets/images/categories/v2/retirement.png"
                      alt="retirement"
                    />
                    <span>Retirement</span>
                  </a>
                </div>
                <div class="col-12 col-lg-4 col-sm-6 text-center mb-4">
                  <a href="occasion/qjykmK">
                    <img
                      src="./assets/images/categories/v2/new-home.png"
                      alt="home"
                    />
                    <span>New Home</span>
                  </a>
                </div>
              </div>
              {/* <div className="row justify-content-center home-category-icons">
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
              </div> */}
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
