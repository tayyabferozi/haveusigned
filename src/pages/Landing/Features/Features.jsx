import React from "react";

const Features = () => {
  return (
    <section className="space-top space-top-short-sm" id="feature">
      <div className="root">
        <div className="decoration-bg">
          <svg
            className="wave"
            width="1281px"
            height="1569px"
            viewBox="0 0 1281 1569"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M19.7665077,0.586224095 C173.454777,201.024442 338.39951,280.899446 514.600709,240.211239 C778.902507,179.178928 866.477805,607.756375 1041.85353,607.756375 C1158.77068,607.756375 1238.15284,586.837583 1280,545 L1274.18697,1225.96189 C1301.0524,1360.78849 1240.86783,1469.11522 1093.63327,1550.94205 C872.781425,1673.68231 547.694716,1115.83347 356.559941,1115.83347 C229.136757,1115.83347 110.418573,1186.39974 0.405387931,1327.53227 L19.7665077,0.586224095 Z"></path>
            </g>
          </svg>
        </div>
        <div className="container mq-md-up" data-class="fixed-width">
          <div className="item">
            <div className="row">
              <div className="col-md-6 px-0 order-md-last">
                <div className="desc">
                  <div className="title-main left-title">
                    <h4>All from your desk</h4>
                  </div>
                  <h6 className="use-text-subtitle2 text-center text-md-start">
                    Order your group greeting card simply and quickly. No more
                    running to the card shop and around the office for
                    signatures.
                  </h6>
                  <a className="btn secondary btn-large waves-effect" href="#0">
                    See Detail
                  </a>
                </div>
              </div>
              <div className="col-md-6 pa-sm-8 order-md-first">
                <div
                  className="wow fadeInLeftShort"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.5s"
                  data-wow-offset="200"
                >
                  <div className="illustration-left">
                    <figure className="figure graphic">
                      <img
                        className="img-2d3d"
                        src="./assets/images/saas/feature1_3d@2x.png"
                        data-2d="./assets"
                        data-3d="./assets/images/saas/feature1_3d@2x.png"
                        alt="illustration"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-md-6 px-0">
                <div className="desc">
                  <div className="title-main right-title">
                    <h4>Share and donate</h4>
                  </div>
                  <h6 className="use-text-subtitle2 text-sm-right">
                    Invite your colleagues, friends or family to sign, and
                    donate.
                  </h6>
                  <div className="text-center text-md-end">
                    <a
                      className="btn secondary btn-large waves-effect"
                      href="#0"
                    >
                      See Detail
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pa-sm-8">
                <div
                  className="wow fadeInRightShort"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.5s"
                  data-wow-offset="200"
                >
                  <div className="illustration-right">
                    <figure className="figure graphic">
                      <img
                        className="img-2d3d"
                        src="./assets/images/saas/feature2_3d@2x.png"
                        data-2d="./assets"
                        data-3d="./assets/images/saas/feature2_3d@2x.png"
                        alt="illustration"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item last">
            <div className="title-main center-title">
              <h4>Card delivery</h4>
            </div>
            <div className="tab">
              <div className="row spacing6 justify-content-center">
                <div className="col-md-10 pa-sm-6">
                  <h6 className="text-center use-text-subtitle2">
                    Recipient receives the card on the delivery date with all
                    messages and donation which they can withdraw or receive via
                    Amazon Gift card.
                  </h6>
                  <div className="illustration-center">
                    <figure className="figure graphic">
                      <img
                        className="img-2d3d"
                        src="./assets/images/saas/feature3_3d@2x.png"
                        data-2d="./assets"
                        data-3d="./assets/images/saas/feature3_3d@2x.png"
                        alt="illustration"
                      />
                    </figure>
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

export default Features;
