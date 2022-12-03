import React from "react";
import { useSelector } from "react-redux";

import EditableField from "./EditableField";

const formFields = [
  {
    label: "My name is: ",
    inputName: "ownerName",
    stepNo: 1,
  },
  {
    label: "My email address is: ",
    inputName: "ownerEmailAddress",
    stepNo: 1,
  },
  {
    label: "This card is for: ",
    inputName: "forRecipientName",
    stepNo: 2,
  },
  {
    label: "My message is: ",
    inputName: "ownerMessage",
    stepNo: 2,
  },
  {
    label: "Order PIN: ",
    inputName: "ownerPassword",
    stepNo: 3,
  },
  {
    label: "I am putting into the envelope: ",
    inputName: "ownerDonationAmount",
    stepNo: 3,
  },
];

const Step5 = ({ setStepState }) => {
  const { envelopeInputDetails } = useSelector((state) => state.cardBuilder);

  return (
    <>
      {formFields.map((el, idx) => {
        return (
          <EditableField
            key={"form-field" + idx}
            {...el}
            idx={idx}
            envelopeInputDetails={envelopeInputDetails}
            setStepState={setStepState}
          />
        );
      })}
      {/* <div>
        <i
          className="fa-solid fa-pencil me-2"
          onClick={() => setStepState(3)}
        ></i>{" "}
        I want to cirulate this to:{" "}
        {envelopeInputDetails.participators.map((el, idx) => {
          return (
            <div className="pl-5 ml-2" key={"participator" + idx}>
              {el}
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default Step5;
