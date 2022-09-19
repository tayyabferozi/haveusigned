import React from "react";
import HomeVideo from "../../components/HomeVideo";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
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
              <div className="row justify-content-center home-category-icons">
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
