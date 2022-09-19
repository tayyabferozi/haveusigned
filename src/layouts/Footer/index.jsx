import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer" className="pt-4">
      <footer className="footer-sitemap">
        <div className="footer-deco">
          <div className="deco-wrap">
            <div className="deco bottom">
              <svg className="wave">
                <g stroke="none" strokeWidth="1" fillRule="evenodd">
                  <g transform="translate(0.000000, -725.000000)">
                    <g>
                      <g>
                        <g transform="translate(-555.178198, 406.382977)">
                          <path
                            d="M10,311.600689 C87.2870181,401.383056 187.280219,446.273623 309.979602,446.27239 C494.028677,446.270542 495.20336,363.569388 701.676006,378.79436 C908.148653,394.019332 909.216954,439.275608 1087.67363,451.006907 C1166.59583,456.195057 1306.38903,225.111735 1609.17703,337.188584 C1811.0357,411.906484 2069.42811,332.176956 2384.35426,98 L1982.6855,405.180766 L21.2425669,523.595781 L10,311.600689 Z"
                            transform="translate(1197.177131, 310.797890) scale(-1, 1) rotate(3.000000) translate(-1197.177131, -310.797890) "
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="deco top">
              <svg className="wave">
                <g stroke="none" strokeWidth="1" fillRule="evenodd">
                  <g transform="translate(0.000000, -725.000000)">
                    <g>
                      <g>
                        <g transform="translate(-555.178198, 406.382977)">
                          <path
                            d="M10,311.600689 C87.2870181,401.383056 187.280219,446.273623 309.979602,446.27239 C494.028677,446.270542 495.20336,363.569388 701.676006,378.79436 C908.148653,394.019332 909.216954,439.275608 1087.67363,451.006907 C1166.59583,456.195057 1306.38903,225.111735 1609.17703,337.188584 C1811.0357,411.906484 2069.42811,332.176956 2384.35426,98 L1982.6855,405.180766 L21.2425669,523.595781 L10,311.600689 Z"
                            transform="translate(1197.177131, 310.797890) scale(-1, 1) rotate(3.000000) translate(-1197.177131, -310.797890) "
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="wave wave-cover"></div>
        </div>
        <div className="container mq-sm-down" data-class="fixed-width">
          <div className="row">
            <div className="col-md-3 pa-lg-4 logo-area">
              <div className="logo">
                <span className="logo-main landscape medium">
                  <img src="/assets/images/logos/hys-v2.png" alt="logo" />
                </span>
              </div>
              <p className="body-2">
                Digital greeting cards for groups at home and work.
              </p>
              <p className="body-2 hidden-sm-down">&copy; Carderra 2022</p>
            </div>
            <div className="col-md-6 pa-4">
              <ul className="show-sm-down collapsible">
                <li className="accordion-content">
                  <div className="collapsible-header">
                    <h6 className="title">Company</h6>
                    <i className="material-icons right arrow">expand_more</i>
                  </div>
                  <div className="collapsible-body">
                    <ul>
                      <li>
                        <Link to="/#hiw">How it Works</Link>
                      </li>
                      <li>
                        <Link to="#feature">Features</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="accordion-content">
                  <div className="collapsible-header">
                    <h6 className="title">Legal</h6>
                    <i className="material-icons right arrow">expand_more</i>
                  </div>
                  <div className="collapsible-body">
                    <ul>
                      <li>
                        <Link to="/privacy">Privacy policy</Link>
                      </li>
                      <li>
                        <Link to="/terms">Terms of use</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="row show-md-up justify-content-around">
                <div className="col pa-4 site-map-item">
                  <h6 className="title mb-4">Company</h6>
                  <ul>
                    <li>
                      <Link to="/how-it-works">How it Works</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact us</Link>
                    </li>
                  </ul>
                </div>
                <div className="col pa-4 site-map-item">
                  <h6 className="title mb-4">Legal</h6>
                  <ul>
                    <li>
                      <Link to="/privacy">Privacy policy</Link>
                    </li>
                    <li>
                      <Link to="/terms">Terms of use</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 pa-4">
              <div className="socmed">
                <a
                  href="https://www.facebook.com/Haveyousigned"
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn-icon waves-effect"
                >
                  <span className="ion-social-facebook icon"></span>
                </a>
                <a
                  href="https://twitter.com/haveyousigned"
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn-icon waves-effect"
                >
                  <span className="ion-social-twitter icon"></span>
                </a>
                <a
                  href="https://www.instagram.com/haveyousigned/"
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn-icon waves-effect"
                >
                  <span className="ion-social-instagram icon"></span>
                </a>
                <a
                  href="https://www.linkedin.com/company/haveyousigned/"
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn-icon waves-effect"
                >
                  <span className="ion-social-linkedin icon"></span>
                </a>
              </div>
              <p className="body-2 mt-5 text-center hidden-md-up">
                &copy; Carderra Ltd 2022
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
