import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Button from "../../components/Button/Button";
import Input from "../../components/Input";
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
    <main className="container-wrap">
      <section className="space-top" id="hiw">
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
          {/* <div className="row justify-content-center">
            <div className="col-md-10 px-0 px-sm-4 px-lg-12">
              <h1 className="text-center home-heading use-text-title2 mt-6 mb-7">
                Digital Greeting Cards for Groups
              </h1>
              <h5 className="use-text-subtitle2 text-center text-muted">
                Select, share and donate.
              </h5>

              <h6 className="mt-8 text-center">
                <strong>I want to create a new envelope for a...</strong>
              </h6>
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default EnvelopeMessage;
