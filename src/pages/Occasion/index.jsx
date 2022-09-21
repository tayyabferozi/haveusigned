import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Occasion = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    setCardsData([
      {
        img: "/assets/images/cards/birthday/01-bday-001.png",
        cardName: "Birthday",
      },
      {
        img: "/assets/images/cards/birthday/01-bday-002.png",
        cardName: "Birthday",
      },
      {
        img: "/assets/images/cards/birthday/01-bday-003.png",
        cardName: "Birthday",
      },
      {
        img: "/assets/images/cards/birthday/01-bday-004.png",
        cardName: "Birthday",
      },
      {
        img: "/assets/images/cards/birthday/01-bday-005.png",
        cardName: "Birthday",
      },
      {
        img: "/assets/images/cards/birthday/01-bday-006.png",
        cardName: "Birthday",
      },
    ]);

    setIsLoading(false);
  }, []);

  return (
    <main class="container-wrap">
      <section class="space-top space-top-short-sm" id="hiw">
        <div class="container" style={{ minHeight: "80vh" }}>
          <div class="row justify-content-center">
            <div class="col-md-10 px-0 px-sm-4 px-lg-12 occasions-cards-container">
              <>
                {!isLoading ? (
                  <>
                    <h1 class="mt-7 text-center home-heading use-text-title2 mb-7">
                      Pick a Birthday card...
                    </h1>
                    <div class="row justify-content-center home-category-icons">
                      {cardsData.map((el, idx) => {
                        const { img, cardName } = el;

                        return (
                          <div
                            key={"occasion-card" + idx}
                            class="col col-lg-4 col-sm-4 text-center mb-5"
                          >
                            <Link to="">
                              <img src={img} alt={cardName} />
                              <span>{cardName}</span>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <div class="row justify-content-center home-category-icons">
                    <div class="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div class="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div class="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div class="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div class="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div class="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div class="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div class="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div class="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div class="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div class="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div class="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                  </div>
                )}
              </>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Occasion;
