import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import MainSection from "../../layouts/MainSection/MainSection";
import { fetchCard, setEnvelopeDetails } from "../../store/slices/cardBuilder";
import kebabize from "../../utils/kebabize";

const EnvelopeMessage = () => {
  const { occasionId, cardId } = useParams();
  const { card, envelopeInputDetails } = useSelector(
    (state) => state.cardBuilder
  );
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    dispatch(setEnvelopeDetails({ name, value }));
  };

  useEffect(() => {
    dispatch(fetchCard(cardId));
  }, [dispatch, cardId]);

  return (
    <MainSection>
      <div className="container">
        <div className="card main">
          <div className="row p-4 w-100">
            <div className="col-md-6 col-sm-5 d-flex align-items-center">
              {card?.data?.cardImageFileName && (
                <img
                  className="w-100"
                  src={`/assets/images/cards/${kebabize(
                    card.data?.occasionName
                  )}/${card.data?.cardImageFileName}`}
                  alt="card-img"
                />
              )}
            </div>
            <div className="col-md-6 col-sm-7">
              <form className="hys-form py-4 p-md-4">
                <h6 className="fw-bold mb-4 font-weight-bold">
                  {card.data?.cardDescription}
                </h6>
                <Input
                  textarea
                  placeholder="Enter your message..."
                  name="ownerMessage"
                  value={envelopeInputDetails.ownerMessage}
                  onChange={inputChangeHandler}
                />
                <br />

                <Button to={`/occasion/${occasionId}/card/${cardId}/details`}>
                  Put this card into my envelope
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default EnvelopeMessage;
