import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Input from "../../../components/Input";
import { setEnvelopeDetails } from "../../../store/slices/cardBuilder";

const donationOptions = [2, 5, 10];

const Step3 = ({ errorsState }) => {
  const { envelopeInputDetails } = useSelector((state) => state.cardBuilder);
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    let { name, value, checked } = e.target;

    if (name === "donation") {
      name = "";
    }

    if (name === "notWantsToDonate") {
      value = checked;
    }

    dispatch(setEnvelopeDetails({ name, value }));
  };

  return (
    <>
      <Input
        label="My password for this envelope is..."
        name="ownerPassword"
        placeholder="Enter your password"
        value={envelopeInputDetails.ownerPassword}
        onChange={inputChangeHandler}
        errorMsg={errorsState.ownerPassword}
      />
      <Input
        type="date"
        label="I want this envelope to be returned by..."
        name="cardToBeReturnedByDate"
        placeholder="Enter your donation amount"
        value={envelopeInputDetails.cardToBeReturnedByDate}
        onChange={inputChangeHandler}
        errorMsg={errorsState.cardToBeReturnedByDate}
      />

      <label className="checkbox-container my-4">
        I do not want to donate
        <input
          name="notWantsToDonate"
          type="checkbox"
          // defaultChecked={envelopeInputDetails.notWantsToDonate}
          checked={envelopeInputDetails.notWantsToDonate}
          onChange={inputChangeHandler}
        />
        <span className="checkmark"></span>
      </label>

      <label className="my-3">and my donation is...</label>

      {!envelopeInputDetails.notWantsToDonate && (
        <>
          {/* <Input
            type="number"
            label="and my donation is..."
            name="ownerDonationAmount"
            placeholder="Enter your donation amount"
            value={envelopeInputDetails.ownerDonationAmount}
            onChange={inputChangeHandler}
            errorMsg={errorsState.ownerDonationAmount}
          /> */}
          <div className="d-flex align-items-center">
            <div className="radio-toolbar flex-shrink-0">
              {donationOptions.map((el, idx) => {
                return (
                  <React.Fragment>
                    <input
                      type="radio"
                      id={"donation_" + el}
                      name="ownerDonationAmount"
                      value={el}
                      checked={
                        +envelopeInputDetails.ownerDonationAmount === +el
                      }
                      onChange={inputChangeHandler}
                    />
                    <label className="me-2" for={"donation_" + el}>
                      £{el}
                    </label>
                  </React.Fragment>
                );
              })}
            </div>
            <input
              className="option-button ms-3"
              type="number"
              name="ownerDonationAmount"
              placeholder="£ other"
              value={
                donationOptions.includes(
                  +envelopeInputDetails.ownerDonationAmount
                )
                  ? ""
                  : envelopeInputDetails.ownerDonationAmount
              }
              onChange={inputChangeHandler}
            />
          </div>
          {errorsState.ownerDonationAmount && (
            <div className="error-msg mb-3">
              {errorsState.ownerDonationAmount}
            </div>
          )}
        </>
      )}

      {/* <div className="form-control"> */}
      {/* </div> */}
    </>
  );
};

export default Step3;
