import React from "react";
import { useSelector } from "react-redux";

import kebabize from "../../utils/kebabize";

const EnvelopeCreated = () => {
  const { card } = useSelector((state) => state.cardBuilder);

  return (
    <main className="container-wrap">
      <section className="space-top" id="hiw">
        <div className="container">
          <div class="card thankyou">
            <div class="row mt-4">
              <div class="col-lg-4 col-sm-12">
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
              <div class="col-lg-8 col-sm-12 border-left p-4">
                <h5 class="mb-4">Thank you for your order!</h5>
                <p>
                  A confirmation email has been sent to you and the envelope has
                  been circulated to all your colleagues and friends inviting
                  them to sing.
                </p>
                <p>
                  To view the envelop, click on the link in your confirmation
                  email and enter your email address and password
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EnvelopeCreated;
