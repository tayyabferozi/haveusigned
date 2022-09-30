import React from "react";

const SkeletonCards = () => {
  return (
    <>
      <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
        <span className="rounded-circle">&nbsp;</span>
      </div>
      <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
        <span className="rounded-circle">&nbsp;</span>
      </div>
      <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
        <span className="rounded-circle">&nbsp;</span>
      </div>
      <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
        <span className="rounded-circle">&nbsp;</span>
      </div>
      <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
        <span className="rounded-circle">&nbsp;</span>
      </div>
      <div className="col col-lg-4 col-sm-4 text-center mb-4 is-loading">
        <span className="rounded-circle">&nbsp;</span>
      </div>
    </>
  );
};

export default SkeletonCards;
