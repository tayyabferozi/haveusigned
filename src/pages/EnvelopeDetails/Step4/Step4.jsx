import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../../components/Button/Button";

import Input from "../../../components/Input";
import {
  addEmptyParticipator,
  editParticipator,
  deleteParticipator,
} from "../../../store/slices/cardBuilder";

const Step4 = () => {
  const { envelopeInputDetails } = useSelector((state) => state.cardBuilder);
  const dispatch = useDispatch();

  const addClickHandler = () => {
    dispatch(addEmptyParticipator());
  };

  return (
    <>
      <label>I want to circulate this envelope to:</label>
      {envelopeInputDetails.participators.map((el, idx) => {
        return (
          <div
            className="d-flex align-items-center mb-5"
            key={"participator" + idx}
          >
            <Input
              noMargin
              rootClassName="flex-grow-1 mb-0 me-5"
              type="email"
              placeholder="Participator's Email"
              value={el}
              onChange={(e) =>
                dispatch(editParticipator({ idx, value: e.target.value }))
              }
            />
            <i
              onClick={() => dispatch(deleteParticipator(idx))}
              className="fa-solid fa-trash"
            ></i>
          </div>
        );
      })}
      <div>
        <Button onClick={addClickHandler}>Add</Button>
      </div>
    </>
  );
};

export default Step4;
