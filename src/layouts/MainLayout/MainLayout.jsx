import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

const MainLayout = ({ withDeco }) => {
  let BodyComp = ({ children }) => <React.Fragment>{children}</React.Fragment>;

  if (withDeco) {
    BodyComp = ({ children }) => (
      <div className="space-top-short space-bottom-short-sm">
        <div className="bg-deco">
          <div className="form-deco">
            <div className="top-deco">
              <svg
                className="wave"
                width="1162px"
                height="1085px"
                viewBox="0 0 1162 1085"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="none" strokeWidth="1" fillRule="evenodd">
                  <path
                    id="Mask"
                    d="M53,301.018249 C176.366182,309.608208 314.757878,342.955075 468.175088,401.058849 C698.300902,488.214511 728.375995,275.031122 839.8,253.973382 C914.08267,239.934888 993.149337,255.61651 1077,301.018249 L1077,877 L53,877 L53,301.018249 Z"
                    transform="translate(565.000000, 563.000000) scale(-1, 1) rotate(142.000000) translate(-565.000000, -563.000000) "
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="form-style">
          <div className="container inner-wrap max-md">
            <div className="full-form-wrap">{children}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="violeta violeta-var" data-type="account">
      <div className="m-application theme--light" id="app">
        <div className="m-content violeta violeta-var" id="main-wrap">
          <div id="home">
            <div className="main-wrap">
              <Header />

              <BodyComp>
                <Outlet />
              </BodyComp>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
