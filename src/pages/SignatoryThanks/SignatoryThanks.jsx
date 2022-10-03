import React from "react";

import ShareEnvelope from "../../components/ShareEnvelope";
import MainSection from "../../layouts/MainSection/MainSection";

const SignatoryThanks = () => {
  return (
    <MainSection>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-lg-6 col-sm-12">
            <h4 className="text-center">
              Thank you for signing Adam John's card
            </h4>
            <br />

            <div className="cards-container">
              <div className="card main p-4">
                <img
                  src="/assets/images/cards/birthday/01-bday-008.png"
                  alt="card"
                />
                <br />
                <p>
                  Nullam ante mi, ultrices eget cursus et, dignissim sed odio.
                  Duis sollicitudin purus in sem condimentum, ut tristique eros
                  commodo. Vestibulum at neque sed massa rhoncus euismod a sed
                  nunc. Sed dolor ligula, semper a malesuada a, malesuada
                  consequat lectus. Nam porta erat tellus, id condimentum ex
                  venenatis sit amet.
                </p>

                <ul className="envelop-summary d-block mt-4">
                  <li>
                    <i className="ti ti-timer"></i> There are{" "}
                    <strong>3 days</strong> left to return this card.
                  </li>
                  <li>
                    <i className="ti ti-user"></i> So far “5” people have signed
                    this card and <strong>£25</strong> have been raised.
                  </li>

                  <li>
                    <strong>Your message:</strong> Duis sollicitudin purus in
                    sem condimentum, ut tristique eros commodo. Vestibulum at
                    neque sed massa rhoncus euismod a sed nunc.
                  </li>
                </ul>
                <br />

                <ShareEnvelope />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default SignatoryThanks;
