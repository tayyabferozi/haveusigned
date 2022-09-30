import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Input from "../../../components/Input";
import { setEnvelopeDetails } from "../../../store/slices/cardBuilder";

const Step3 = ({ errorsState }) => {
  const { envelopeInputDetails } = useSelector((state) => state.cardBuilder);
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    let { name, value, checked } = e.target;

    if (name === "wantsToDonate") {
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
        I do want to donate
        <input
          name="wantsToDonate"
          type="checkbox"
          // defaultChecked={envelopeInputDetails.wantsToDonate}
          onChange={inputChangeHandler}
        />
        <span className="checkmark"></span>
      </label>

      {envelopeInputDetails.wantsToDonate && (
        <Input
          type="number"
          label="and my donation is..."
          name="ownerDonationAmount"
          placeholder="Enter your donation amount"
          value={envelopeInputDetails.ownerDonationAmount}
          onChange={inputChangeHandler}
          errorMsg={errorsState.ownerDonationAmount}
        />
      )}

      {/* <div className="form-control"> */}
      {/* </div> */}
    </>
  );
};

export default Step3;
