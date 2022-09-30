import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Input from "../../../components/Input";
import { setEnvelopeDetails } from "../../../store/slices/cardBuilder";

const Step2 = ({ errorsState }) => {
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
        label="The card is for..."
        name="forRecipientName"
        placeholder="Recipient name"
        value={envelopeInputDetails.forRecipientName}
        onChange={inputChangeHandler}
        errorMsg={errorsState.forRecipientName}
      />
      <Input
        label="their email address is..."
        name="forRecipientEmailAddress"
        placeholder="Recipient email address"
        value={envelopeInputDetails.forRecipientEmailAddress}
        onChange={inputChangeHandler}
        errorMsg={errorsState.forRecipientEmailAddress}
      />
      <Input
        textarea
        label="and my message is..."
        name="ownerMessage"
        placeholder="Envelope owner's message"
        value={envelopeInputDetails.ownerMessage}
        onChange={inputChangeHandler}
        errorMsg={errorsState.ownerMessage}
      />
    </>
  );
};

export default Step2;
