import React from "react";

const HomeVideo = () => {
  return (
    <section className="space-top space-top-short-sm" id="hiw">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 px-0 px-sm-4 px-lg-12">
            <div className="about-style">
              <div className="video-root">
                <div className="modal video-popup" id="video_modal">
                  <div className="modal-content">
                    <h4 className="use-text-subtitle mb-3">
                      Under construction
                    </h4>
                    <button className="btn-icon modal-close close-btn waves-effect">
                      <i className="material-icons">close</i>
                    </button>
                    <div className="text-center">
                      <div id="video_iframe"></div>
                    </div>
                  </div>
                </div>
                <h4 className="use-text-title2 mb-3 use-text-primary">
                  How it Works
                </h4>
                <p className="pb-2 use-text-subtitle2">
                  Shared greeting cards made simple.
                </p>
                <div className="video-wrap">
                  <div
                    className="modal-trigger"
                    data-target="video_modal"
                    data-video="sf15CtXuw9M"
                  >
                    <div className="card media-card landscape video">
                      <span className="badge grey darken-4">02:40</span>
                      <figure>
                        <img
                          src="https://whitecode.legal/assets/images/how_it_works.jpg"
                          alt="cover"
                        />
                      </figure>
                      <div className="property">
                        <a
                          className="btn play-btn waves-effect"
                          href="#0"
                          role="button"
                        >
                          <span className="ion-ios-play"></span>
                        </a>
                        <div className="card-title media-title">
                          Coming Soon
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideo;
