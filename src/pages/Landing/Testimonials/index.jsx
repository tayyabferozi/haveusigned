import React from "react";

const Testimonials = () => {
  return (
    <section className="space-top-short" id="testimonials">
      <div className="root">
        <div className="container fixed-width-lg-up">
          <div className="row spacing6">
            <div className="col-md-7 px-6">
              <div className="slider-wrap">
                <div className="hidden-sm-down">
                  <div className="decoration">
                    <svg
                      width="900px"
                      height="618px"
                      viewbox="0 0 900 618"
                      version="1.1"
                    >
                      <g stroke="none" strokeWidth="0" fillRule="evenodd">
                        <path d="M442.972909,617.331576 C569.290851,617.331576 618.618612,525.937324 804.142458,549.304771 C989.666303,572.672218 872.7227,109.743835 732.652282,54.307977 C592.581863,-1.12788075 538.308155,61.549598 304.148084,8.36113994 C69.9880137,-44.8273182 0,167.6782 0,308.489881 C0,450.379879 177.014996,617.331576 442.972909,617.331576 Z" />
                      </g>
                    </svg>
                  </div>
                </div>
                <h3 className="testi-title use-text-title2 text-center text-lg-start">
                  What Our Customers
                  <br />
                  <strong>Testimonial</strong>
                </h3>
                <div className="carousel">
                  <div className="slick-carousel" id="testimonial_carousel">
                    <div className="item">
                      <div className="inner">
                        <div className="profile">
                          <div className="avatar avatar-img">
                            <img
                              src="https://avatars.dicebear.com/api/avataaars/marciauw.svg"
                              alt="John Doe"
                            />
                          </div>
                          <h6 className="name">
                            John Smith<span>Chief Digital Officer</span>
                          </h6>
                        </div>
                        <p className="use-text-paragraph">
                          Super easy way to arrange a leaving card. Well done
                          for making the whole experience an absolute breeze!
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="inner">
                        <div className="profile">
                          <div className="avatar avatar-img">
                            <img
                              src="https://avatars.dicebear.com/api/avataaars/unyit.svg"
                              alt="Jean Doe"
                            />
                          </div>
                          <h6 className="name">
                            Jean Fitzimmons<span>Marketing Executive</span>
                          </h6>
                        </div>
                        <p className="use-text-paragraph">
                          Truly awesome way to make things more efficient.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="inner">
                        <div className="profile">
                          <div className="avatar avatar-img">
                            <img
                              src="https://avatars.dicebear.com/api/avataaars/unyit.svg"
                              alt="Jena Doe"
                            />
                          </div>
                          <h6 className="name">
                            Hannah Davis<span>Graphic Designer</span>
                          </h6>
                        </div>
                        <p className="use-text-paragraph">
                          Quick, intuitive and saves so much time. Why wasn't
                          this around sooner?
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="inner">
                        <div className="profile">
                          <div className="avatar avatar-img">
                            <img
                              src="https://avatars.dicebear.com/api/avataaars/marciauw.svg"
                              alt="Jovelin Doe"
                            />
                          </div>
                          <h6 className="name">
                            Pierre Cardin<span>Air Traffic Controller</span>
                          </h6>
                        </div>
                        <p className="use-text-paragraph">
                          Great platform, love the idea to digitally sign a
                          single care and donate as a group.
                        </p>
                      </div>
                    </div>
                    {/* <!--<div className="item">
                                  <div className="inner">
                                    <div className="profile">
                                      <div className="avatar avatar-img">
                                        <img src="https://avatars.dicebear.com/api/avataaars/unyit.svg" alt="Jihan Doe" />
                                      </div>
                                      <h6 className="name">Jihan Doe<span>CEO Software House</span></h6>
                                    </div>
                                    <p className="use-text-paragraph">Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.</p>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="inner">
                                    <div className="profile">
                                      <div className="avatar avatar-img">
                                        <img src="https://avatars.dicebear.com/api/avataaars/marciauw.svg" alt="Jovelin Doe" />
                                      </div>
                                      <h6 className="name">Jovelin Doe<span>Senior Graphic Designer</span></h6>
                                    </div>
                                    <p className="use-text-paragraph">Very useful for task management between team.</p>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="inner">
                                    <div className="profile">
                                      <div className="avatar avatar-img">
                                        <img src="https://avatars.dicebear.com/api/avataaars/marciauw.svg" alt="John Doe" />
                                      </div>
                                      <h6 className="name">John Doe<span>Senior Graphic Designer</span></h6>
                                    </div>
                                    <p className="use-text-paragraph">The productivity level increases to a great extent with this Mobile Application. Being a PM, having a way to track everything on my mobile phone just makes you even more mobile.</p>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="inner">
                                    <div className="profile">
                                      <div className="avatar avatar-img">
                                        <img src="https://avatars.dicebear.com/api/avataaars/marciauw.svg" alt="John Doe" />
                                      </div>
                                      <h6 className="name">John Doe<span>Chief Digital Officer</span></h6>
                                    </div>
                                    <p className="use-text-paragraph">I know a lot of people hate this product... I also used to... After trying a bunch of simpler solutions I always find myself coming back to it.</p>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="inner">
                                    <div className="profile">
                                      <div className="avatar avatar-img">
                                        <img src="https://avatars.dicebear.com/api/avataaars/unyit.svg" alt="Jean Doe" />
                                      </div>
                                      <h6 className="name">Jean Doe<span>Chief Digital Officer</span></h6>
                                    </div>
                                    <p className="use-text-paragraph">Great app. Thank you! I would not expect it to have so many features from the desktop version, but surprisingly it does. And UX and UI are are both very nice.</p>
                                  </div>-->
                            </div>
                        </div> */}
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

export default Testimonials;
