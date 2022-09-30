import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Input from "../../../components/Input";
import { setEnvelopeDetails } from "../../../store/slices/cardBuilder";

const Step1 = ({ errorsState }) => {
  const { envelopeInputDetails } = useSelector((state) => state.cardBuilder);
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    dispatch(setEnvelopeDetails({ name, value }));
  };

  return (
    <>
      <Input
        label="My name is..."
        name="ownerName"
        placeholder="Enter your name"
        value={envelopeInputDetails.ownerName}
        onChange={inputChangeHandler}
        errorMsg={errorsState.ownerName}
      />
      <Input
        label="and my email address is..."
        name="ownerEmailAddress"
        type="email"
        placeholder="Enter your email"
        value={envelopeInputDetails.ownerEmailAddress}
        onChange={inputChangeHandler}
        errorMsg={errorsState.ownerEmailAddress}
      />
    </>
  );
};

export default Step1;
