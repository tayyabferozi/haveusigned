import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";

const Contact = () => {
  return (
    <>
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
              <div className="row spacing6 gy-5">
                <div className="col-sm-6 px-6">
                  <Input label="What is your name? *" type="text" id="name" />
                </div>
                <div className="col-sm-6 px-6">
                  <Input
                    label="What is your email? *"
                    type="email"
                    id="email"
                  />
                </div>
                <div className="col-sm-6 px-6">
                  <Input
                    label="What is your phone number (optional)?"
                    type="tel"
                    id="phone"
                  />
                </div>
                <div className="col-sm-6 px-6">
                  <Input
                    label="Company name, if applicable?"
                    type="text"
                    id="company"
                  />
                </div>
                <div className="col-sm-12 px-6">
                  <Input
                    label="Write your message here"
                    textarea
                    id="message"
                  />
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
    </>
  );
};

export default Contact;
