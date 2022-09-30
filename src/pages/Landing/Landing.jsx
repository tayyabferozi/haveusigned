import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import HomeVideo from "../../components/HomeVideo";
import Features from "./Features";
// import Testimonials from "./Testimonials";

import { fetchOccasions } from "../../store/slices/cardBuilder";
import STASUSES from "../../store/slices/enums";
import SkeletonCards from "./SkeletonCards";

const HARDCODED_IMGS = [
  "./assets/images/categories/v2/birthday.png",
  "./assets/images/categories/v2/leaving.png",
  "./assets/images/categories/v2/new-baby.png",
  "./assets/images/categories/v2/wedding.png",
  "./assets/images/categories/v2/retirement.png",
  "./assets/images/categories/v2/new-home.png",
];

const Landing = () => {
  const { occasions } = useSelector((state) => state.cardBuilder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOccasions());
  }, [dispatch]);

  return (
    <main className="container-wrap">
      <section className="space-top space-top-short-sm" id="hiw">
        <div className="container">
          <div className="row justify-content-center">
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
              <div className="row justify-content-center home-category-icons">
                {occasions.state === STASUSES.LOADING ? (
                  <SkeletonCards />
                ) : (
                  occasions.data.map((el, idx) => {
                    const { occasionId, occasionName } = el;

                    return (
                      <div
                        key={occasionId}
                        className="col-12 col-lg-4 col-sm-6 text-center mb-4"
                      >
                        <Link to={`/occasion/${occasionId}`}>
                          <img src={HARDCODED_IMGS[idx]} alt={occasionName} />
                          <span>{occasionName}</span>
                        </Link>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeVideo />
      <Features />
      {/* <Testimonials /> */}
    </main>
  );
};

export default Landing;
