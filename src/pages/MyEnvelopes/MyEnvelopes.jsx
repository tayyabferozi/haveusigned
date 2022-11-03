import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import STATUSES from "../../store/slices/enums";

import { envelopeAuth } from "../../store/slices/myEnvelope";

const Envelopes = () => {
  const navigate = useNavigate();

  const { status } = useSelector((state) => state.myEnvelope.auth);
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    userEmail: "",
    password: "",
    envelopeId: "a9aoql",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      envelopeAuth({
        formState: {
          userEmail: formState.userEmail,
          password: formState.password,
        },
        envelopeId: formState.envelopeId,
        cb: () => navigate("/envelope"),
      })
    );
  };

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
        <form
          id="contact_form"
          autoComplete="off"
          className="w-50 m-auto"
          onSubmit={formSubmitHandler}
        >
          <div className="row spacing6">
            <div className="col-sm-12 px-6">
              <div className="mb-4">
                <label htmlFor="email">My email address is...</label>
                <input
                  className="form-control"
                  autoComplete="off"
                  id="email"
                  name="userEmail"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formState.userEmail}
                  onChange={inputChangeHandler}
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
                  name="envelopeId"
                  type="text"
                  required
                  placeholder="Enter your unique envelope ID"
                  value={formState.envelopeId}
                  onChange={inputChangeHandler}
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
                  value={formState.password}
                  onChange={inputChangeHandler}
                  required
                  type="password"
                />
              </div>
            </div>
          </div>
          <div className="btn-area flex">
            <div className="my-8 my-sm-0">
              <button
                disabled={status === STATUSES.LOADING}
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
