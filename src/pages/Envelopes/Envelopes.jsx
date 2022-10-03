import React from "react";

const Envelopes = () => {
  return (
    <main className="container max-md pb-5 mb-5">
      <section className="space-top pb-5" id="hiw">
        <h3 className="title-contact use-text-title use-text-primary pb-3 text-center">
          My Envelope
        </h3>
        <p className="desc use-text-subtitle2 text-center">
          To open your envelope please enter your email address, your unique
          envelope ID and your password
        </p>
        <form id="contact_form" autoComplete="off" className="w-50 m-auto">
          <div className="row spacing6">
            <div className="col-sm-12 px-6">
              <div className="mb-4">
                <label htmlFor="email">My email address is...</label>
                <input
                  className="form-control"
                  autoComplete="off"
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="col-sm-12 px-6">
              <div className="mb-4">
                <label htmlFor="envelope_id">my unique envelope ID is...</label>
                <input
                  className="form-control"
                  autoComplete="off"
                  id="envelope_id"
                  name="envelope_id"
                  type="text"
                  required
                  placeholder="Enter your unique envelope ID"
                />
              </div>
            </div>
            <div className="col-sm-12 px-6">
              <div className="mb-4">
                <label htmlFor="password">and the password is...</label>
                <input
                  className="form-control"
                  id="password"
                  autoComplete="off"
                  name="password"
                  placeholder="Enter your password"
                  required
                  type="password"
                />
              </div>
            </div>
          </div>
          <div className="btn-area flex">
            <div className="my-8 my-sm-0">
              <button
                className="btn btn-large waves-effect primary"
                type="submit"
              >
                Open My Envelope
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Envelopes;
