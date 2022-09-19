import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="form-style">
      <div className="container inner-wrap max-md">
        <div className="full-form-wrap">
          <h3 className="title-contact use-text-title use-text-primary pb-3 text-center">
            Say Hello to Us
          </h3>
          <p className="desc use-text-subtitle2 text-center">
            Do you have any questions? Drop us a message.
          </p>
          <div className="form">
            <div id="success">
              <div>
                <form id="contact_form">
                  <div className="row spacing6">
                    <div className="col-sm-6 px-6">
                      <div className="input-field dark">
                        <input
                          className="validate"
                          id="name"
                          type="text"
                          required
                        />
                        <label for="name">What is your name? *</label>
                      </div>
                    </div>
                    <div className="col-sm-6 px-6">
                      <div className="input-field dark">
                        <input
                          className="validate"
                          id="email"
                          type="email"
                          required
                        />
                        <label for="email">What is your email? *</label>
                      </div>
                    </div>
                    <div className="col-sm-6 px-6">
                      <div className="input-field dark">
                        <input id="phone" type="tel" />
                        <label for="phone">
                          What is your phone number (optional)?
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-6 px-6">
                      <div className="input-field dark">
                        <input id="company" type="text" />
                        <label for="company">
                          Company name, if applicable?
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-12 px-6">
                      <div className="input-field dark">
                        <textarea
                          className="materialize-textarea"
                          id="message"
                          rows="6"
                        ></textarea>
                        <label for="message">Write your message here</label>
                      </div>
                    </div>
                  </div>
                  <div className="btn-area flex">
                    <div className="form-control-label">
                      <label>
                        <input
                          className="filled-in primary"
                          type="checkbox"
                          required
                        />
                        <span>I have read and accept the </span>
                      </label>
                      <br />
                      <Link to="/terms">Terms of Service</Link> &amp;{" "}
                      <Link to="/privacy">Privacy Policy *</Link>
                    </div>
                    <div className="my-8 my-sm-0">
                      <button
                        className="btn btn-large waves-effect primary"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
