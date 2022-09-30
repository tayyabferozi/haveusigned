import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import kebabize from "../../utils/kebabize";
import { fetchOccasionCards } from "../../store/slices/cardBuilder";
import STASUSES from "../../store/slices/enums";
import SkeletonCards from "./SkeletonCards";

const Occasion = () => {
  const { occasionId: id } = useParams();
  const dispatch = useDispatch();
  const { occasionCards } = useSelector((state) => state.cardBuilder);

  useEffect(() => {
    dispatch(fetchOccasionCards(id));
  }, [dispatch, id]);

  return (
    <main className="container-wrap">
      <section className="space-top space-top-short-sm" id="hiw">
        <div className="container" style={{ minHeight: "80vh" }}>
          <div className="row justify-content-center">
            <div className="col-md-10 px-0 px-sm-4 px-lg-12 occasions-cards-container">
              <>
                {occasionCards.state === STASUSES.LOADING ? (
                  <SkeletonCards />
                ) : (
                  <>
                    <h1 className="mt-7 text-center home-heading use-text-title2 mb-7">
                      Pick a {occasionCards.title} card...
                    </h1>
                    <div className="row justify-content-center home-category-icons">
                      {occasionCards.data.map((el, idx) => {
                        const { cardId, cardName, cardImageFileName } = el;

                        return (
                          <div
                            key={cardId}
                            className="col col-lg-4 col-sm-4 text-center mb-5"
                          >
                            <Link to={`/occasion/${id}/card/${cardId}/message`}>
                              <img
                                src={`/assets/images/cards/${kebabize(
                                  occasionCards.title
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
