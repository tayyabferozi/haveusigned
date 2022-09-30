import React from "react";

const EditableField = ({
  label,
  envelopeInputDetails,
  stepNo,
  setStepState,
  inputName,
}) => {
  return (
    <div className="py-1">
      <i
        class="fa-solid fa-pencil me-2"
        onClick={() => setStepState(stepNo - 1)}
      ></i>
      {label} {envelopeInputDetails[inputName]}{" "}
    </div>
  );
};

export default EditableField;
