import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardsSigners from "../../components/CardsSigners";
import ShareEnvelope from "../../components/ShareEnvelope";
import MainSection from "../../layouts/MainSection";
import { fetchEnvelope } from "../../store/slices/myEnvelope";
import { HYS_ENV_AUTH } from "../../store/slices/enums";

const Envelope = () => {
  const {
    envelope: { envelopeId, data },
  } = useSelector((state) => state.myEnvelope);
  const dispatch = useDispatch();

  useEffect(() => {
    const id =
      envelopeId || JSON.parse(localStorage.getItem(HYS_ENV_AUTH)).envelopeId;

    if (id) {
      dispatch(fetchEnvelope(id));
    }
  }, [dispatch, envelopeId]);

  return (
    <MainSection sectionClassName="accounts">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <h5 className="text-center">
              {data?.cardDetails?.cardName} card envelope details for{" "}
              {data.recipientName}
            </h5>
            <br />

            <div className="cards-container">
              <div className="card main">
                <div className="row">
                  <div className="col-lg-5 col-sm-12">
                    <img
                      className="w-100"
                      src="/assets/images/cards/birthday/01-bday-008.png"
                      alt="card"
                    />
                  </div>
                  <div className="col-lg-7 col-sm-12 text-left pl-4">
                    <h4 className="mt-5 pt-5 font-weight-">
                      {"Wishing you a happy birthday"}
                    </h4>

                    <ul className="envelop-summary d-block mt-5 pt-2 pl-5">
                      <li className="my-4">
                        <i className="ti ti-timer"></i> There are{" "}
                        <strong>
                          {parseInt(data?.numberOfDaysLeftToReturnEnvelope)}
                        </strong>{" "}
                        left to return this card.
                      </li>
                      <li className="my-4">
                        <i className="ti ti-user"></i>{" "}
                        <strong>{data?.signatories?.length}</strong> people have
                        signed this card
                      </li>
                      <li className="my-4">
                        <i className="ti ti-money"></i> So far,{" "}
                        <strong>£{data?.amount}</strong> has been put into this
                        envelope.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <br />

            <CardsSigners data={data?.signatories} />

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
