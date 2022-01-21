import React from "react";
import logo from "../../img/logo-white.png";
import personone from "../../img/jhonny.png";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <header className="header width88">
        <div className="header__wrapper">
          <div className="header-content">
            <div className="header-schoolyear">
              <h2>
                School Year:
                <span>2022-2023</span>
              </h2>
            </div>
            <div className="header-profile">
              <div>
                <h2>Jhonny Dichoso</h2>
                <h3>Admin</h3>
              </div>
              <div className="personal-img">
                <img src={personone} alt="profile-picture" />
              </div>
              <span>
                <a href="/ModalSuccess">
                  <FiLogOut />
                </a>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
