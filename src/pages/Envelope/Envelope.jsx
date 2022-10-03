import React from "react";
import CardsSigners from "../../components/CardsSigners";

import ShareEnvelope from "../../components/ShareEnvelope";
import MainSection from "../../layouts/MainSection";

const Envelope = () => {
  return (
    <MainSection sectionClassName="accounts">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-sm-12">
            <h5 class="text-center">
              {"Happy birthday"} card envelope details for {"Adams John"}
            </h5>
            <br />

            <div class="cards-container">
              <div class="card main">
                <div class="row">
                  <div class="col-lg-5 col-sm-12">
                    <img
                      className="w-100"
                      src="/assets/images/cards/birthday/01-bday-008.png"
                      alt="card"
                    />
                  </div>
                  <div class="col-lg-7 col-sm-12 text-left pl-4">
                    <h4 class="mt-5 pt-5 font-weight-">
                      {"Wishing you a happy birthday"}
                    </h4>

                    <ul class="envelop-summary d-block mt-5 pt-2 pl-5">
                      <li className="my-4">
                        <i class="ti ti-timer"></i> There are{" "}
                        <strong>{"3 days"}</strong> left to return this card.
                      </li>
                      <li className="my-4">
                        <i class="ti ti-user"></i> <strong>{"5"}</strong> people
                        have signed this card
                      </li>
                      <li className="my-4">
                        <i class="ti ti-money"></i> So far,{" "}
                        <strong>{"£5"}</strong> has been put into this envelope.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <CardsSigners />

            <br />
            <div className="container max-sm">
              <ShareEnvelope />
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default Envelope;
