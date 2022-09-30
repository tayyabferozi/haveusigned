import React, { useState } from "react";
import clsx from "clsx";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sideMenuActive, setSideMenuActive] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuActive((prevState) => !prevState);
  };

  useEffect(() => {
    const ev = window.addEventListener("scroll", function () {
      if (window.pageYOffset > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });

    return window.removeEventListener("scroll", ev);
  }, []);

  return (
    <>
      <div
        className={clsx("sidenav mobile-nav", sideMenuActive && "active")}
        id="slide_menu"
      >
        <div className="side-multilv">
          <div className="collection side-multilv">
            <ul className="collapsible expandable">
              <li className="collection-item">
                <NavLink
                  className="sidenav-close waves-effect menu-list"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="collection-item">
                <NavLink
                  className="sidenav-close waves-effect menu-list"
                  to="/how-it-works"
                >
                  How it Works
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="dropdown-divider"></div>
          <div className="collection">
            <ul>
              <li className="collection-item">
                <Button
                  className="sidenav-close waves-effect menu-list"
                  to="/my-envelopes"
                >
                  My Envelopes
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header
        className={clsx("app-bar header", isScrolled && "fixed")}
        id="header"
      >
        <div className="container">
          <div className="header-content">
            <nav className="nav-menu">
              <button
                className={clsx(
                  "btn-icon waves-effect sidenav-trigger hamburger hamburger--spin show-md-down",
                  sideMenuActive && "is-active"
                )}
                id="mobile_menu"
                type="button"
                data-target="slide_menu"
                onClick={toggleSideMenu}
              >
                <span className="hamburger-box">
                  <span className="bar hamburger-inner"></span>
                </span>
              </button>
              <div className="logo">
                <Link to="/">
                  <span className="logo-main landscape medium">
                    <img src="/assets/images/logos/hys-v2.png" alt="logo" />
                  </span>
                </Link>
              </div>
              <div className="scrollactive-nav scrollnav show-lg-up multi-menu">
                <ul className="main-menu">
                  <li>
                    <NavLink
                      className="btn btn-flat anchor-link waves-effect"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="btn btn-flat anchor-link waves-effect"
                      to="/how-it-works"
                    >
                      How it Works
                    </NavLink>
                  </li>
                </ul>
              </div>
              <nav className="user-menu">
                <Button
                  className="btn waves-effect primary show-sm-up"
                  to="/my-envelopes"
                >
                  My Envelopes
                </Button>
              </nav>
            </nav>
            <div id="container_menu"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
