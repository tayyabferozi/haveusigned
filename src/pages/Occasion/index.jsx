import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import kebabize from "../../utils/kebabize";

const Occasion = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`/occasions/${id}/cards`)
      .then((res) => {
        setCardsData(res.data.cards);
        setTitle(res.data.occasionName);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });

    // setCardsData([
    //   {
    //     img: "/assets/images/cards/birthday/01-bday-001.png",
    //     cardName: "Birthday",
    //   },
    //   {
    //     img: "/assets/images/cards/birthday/01-bday-002.png",
    //     cardName: "Birthday",
    //   },
    //   {
    //     img: "/assets/images/cards/birthday/01-bday-003.png",
    //     cardName: "Birthday",
    //   },
    //   {
    //     img: "/assets/images/cards/birthday/01-bday-004.png",
    //     cardName: "Birthday",
    //   },
    //   {
    //     img: "/assets/images/cards/birthday/01-bday-005.png",
    //     cardName: "Birthday",
    //   },
    //   {
    //     img: "/assets/images/cards/birthday/01-bday-006.png",
    //     cardName: "Birthday",
    //   },
    // ]);
  }, [id]);

  return (
    <main className="container-wrap">
      <section className="space-top space-top-short-sm" id="hiw">
        <div className="container" style={{ minHeight: "80vh" }}>
          <div className="row justify-content-center">
            <div className="col-md-10 px-0 px-sm-4 px-lg-12 occasions-cards-container">
              <>
                {!isLoading ? (
                  <>
                    <h1 className="mt-7 text-center home-heading use-text-title2 mb-7">
                      Pick a {title} card...
                    </h1>
                    <div className="row justify-content-center home-category-icons">
                      {cardsData.map((el, idx) => {
                        const {
                          cardId,
                          cardName,
                          // cardDescription,
                          cardImageFileName,
                        } = el;

                        return (
                          <div
                            key={cardId}
                            className="col col-lg-4 col-sm-4 text-center mb-5"
                          >
                            <Link to="">
                              <img
                                src={`/assets/images/cards/${kebabize(
                                  title
                                )}/${cardImageFileName}`}
                                alt={cardName}
                              />
                              <span>{cardName}</span>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <div className="row justify-content-center home-category-icons">
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
                      <span>&nbsp;</span>
                    </div>
                    <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
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
