import React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import MainSection from "../../layouts/MainSection/MainSection";

import kebabize from "../../utils/kebabize";

const EnvelopeCreated = () => {
  const { card, createdEnvelope } = useSelector((state) => state.cardBuilder);

  return (
    <MainSection>
      <div className="container">
        <div className="card thankyou">
          <div className="row mt-4">
            <div className="col-lg-4 col-sm-12">
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
            <div className="col-lg-8 col-sm-12 p-4">
              <h5 className="mb-4">Thank you for your order!</h5>
              <p>
                A confirmation email has been sent to you and the envelope has
                been circulated to all your colleagues and friends inviting them
                to sing.
              </p>
              <p>
                To view the envelop, click on the link in your confirmation
                email and enter your email address and password
              </p>

              <Button
                className="mt-3"
                to={`/my-envelopes?id=${createdEnvelope?.data?.envelopeId}`}
              >
                View this envelope
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default EnvelopeCreated;
