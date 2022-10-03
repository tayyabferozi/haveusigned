import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";
import { toast } from "react-toastify";

import Button from "../../components/Button/Button";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import { createEnvelope } from "../../store/slices/cardBuilder";
import isEmpty from "../../utils/isEmpty";
import MainSection from "../../layouts/MainSection/MainSection";
import STATUSES from "../../store/slices/enums";

const stepLables = ["My Details", "Recipient", "Delivery", "Share", "Confirm"];

const EnvelopeDetails = () => {
  const navigate = useNavigate();

  const { cardId } = useParams();

  const { createdEnvelope, envelopeInputDetails } = useSelector(
    (state) => state.cardBuilder
  );
  const dispatch = useDispatch();

  const [stepState, setStepState] = useState(0);
  const [errorsState, setErrorsState] = useState({
    ownerName: "",
    ownerEmailAddress: "",
    ownerPassword: "",
    ownerMessage: "",
    forRecipientName: "",
    forRecipientEmailAddress: "",
    cardToBeReturnedByDate: "",
    ownerDonationAmount: "",
    Cost: "",
    participators: "",
  });

  const changeStepHandler = (val) => {
    setStepState((prevState) => prevState + val);
  };

  const setError = (name, val) =>
    setErrorsState((prevState) => ({ ...prevState, [name]: val }));

  const resetErrors = (names) => {
    names.forEach((name) => {
      setErrorsState((prevState) => ({ ...prevState, [name]: "" }));
    });
  };

  const nextClickHandler = (e) => {
    e.preventDefault();

    let hasErrors = false;

    if (stepState === 0) {
      resetErrors(["ownerName", "ownerEmailAddress"]);

      if (isEmpty(envelopeInputDetails.ownerName)) {
        hasErrors = true;
        setError("ownerName", "Please enter your name");
      }
      if (isEmpty(envelopeInputDetails.ownerEmailAddress)) {
        hasErrors = true;
        setError("ownerEmailAddress", "Please enter your email");
      }
    }

    if (stepState === 1) {
      resetErrors([
        "forRecipientName",
        "forRecipientEmailAddress",
        "ownerMessage",
      ]);

      if (isEmpty(envelopeInputDetails.forRecipientName)) {
        hasErrors = true;
        setError("forRecipientName", "Please enter recipient's name");
      }
      if (isEmpty(envelopeInputDetails.forRecipientEmailAddress)) {
        hasErrors = true;
        setError("forRecipientEmailAddress", "Please enter recipient's email");
      }
      if (isEmpty(envelopeInputDetails.ownerMessage)) {
        hasErrors = true;
        setError("ownerMessage", "Please enter your message");
      }
    }

    if (stepState === 2) {
      resetErrors([
        "ownerPassword",
        "cardToBeReturnedByDate",
        "ownerDonationAmount",
      ]);

      if (isEmpty(envelopeInputDetails.ownerPassword)) {
        hasErrors = true;
        setError("ownerPassword", "Please enter a password");
      }
      if (isEmpty(envelopeInputDetails.cardToBeReturnedByDate)) {
        hasErrors = true;
        setError("cardToBeReturnedByDate", "Please enter a return date");
      }
      if (!envelopeInputDetails.notWantsToDonate)
        if (isEmpty(envelopeInputDetails.ownerDonationAmount)) {
          hasErrors = true;
          setError("ownerDonationAmount", "Please enter your donation amount");
        }
    }

    if (hasErrors) {
      return;
    }

    if (stepState === 4) {
      dispatch(
        createEnvelope({
          formData: {
            ...envelopeInputDetails,
            cardId,
            cardMessage: envelopeInputDetails.ownerMessage,
            Cost: 2.5,
            ownerDonationAmount: envelopeInputDetails.notWantsToDonate
              ? 1
              : envelopeInputDetails.ownerDonationAmount,
          },
          cb: (state, errors) => {
            if (state === "error") toast.error("Uh Oh! Something went wrong");
            else navigate("/envelope-created");
          },
        })
      );

      return;
    }

    changeStepHandler(1);
  };

  const prevClickHandler = (e) => {
    e.preventDefault();

    changeStepHandler(-1);
  };

  return (
    <MainSection sectionClassName="order">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12 col-sm-12">
            <h1 className="text-left">Envelope details</h1>

            <ul className="steps">
              {stepLables.map((el, idx) => {
                return (
                  <li
                    className={clsx(
                      idx === stepLables.length - 1 && "last",
                      idx === stepState && "active",
                      idx < stepState && "past"
                    )}
                    key={"step-label" + idx}
                    onClick={() => setStepState(idx)}
                  >
                    {el}
                  </li>
                );
              })}
            </ul>

            <form className="hys-form mt-5 text-left">
              {stepState === 0 && <Step1 errorsState={errorsState} />}
              {stepState === 1 && <Step2 errorsState={errorsState} />}
              {stepState === 2 && <Step3 errorsState={errorsState} />}
              {stepState === 3 && <Step4 errorsState={errorsState} />}
              {stepState === 4 && (
                <Step5 errorsState={errorsState} setStepState={setStepState} />
              )}

              <div className="pt-5">
                {stepState > 0 && (
                  <Button
                    className="me-3"
                    role="button"
                    onClick={prevClickHandler}
                  >
                    Previous
                  </Button>
                )}

                <Button
                  role="button"
                  onClick={nextClickHandler}
                  disabled={createdEnvelope.status === STATUSES.LOADING}
                >
                  {stepState === 4 ? "Submit" : "Next"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default EnvelopeDetails;
