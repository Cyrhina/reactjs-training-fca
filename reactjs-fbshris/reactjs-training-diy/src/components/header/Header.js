import React, {useState} from "react";
import personone from "../../img/jhonny.png";
import logoone from "../../img/logo.png";
import { FiLogOut } from "react-icons/fi";
import { FaClipboardCheck, FaClipboardList, FaCog } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillDashboard, AiTwotoneSetting } from "react-icons/ai";
import { BsFillPersonFill, BsMegaphoneFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import SideNavigation from "../sidenavigation/SideNavigation";

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => setIsShow(!isShow)
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
              <div className="logo">
                <img src={logoone} alt="profile-picture" />
              </div>
            </div>
            <div className="header-profile">
              <div className="header-profile-name">
                <h2>Jhonny Dichoso</h2>
                <h3>Admin</h3>
              </div>
              <div className="personal-img">
                <img src={personone} alt="profile-picture" />
              </div>
              <div className="logout">
                <a href="/">
                  <FiLogOut />
                </a>
              </div>

              <div id="burger-nav" className= "burger-button" onClick={() => handleShow()}>
                <span>
                  <GiHamburgerMenu />
                </span>
              </div>
            </div>
          </div>
        </div>

    {
      isShow && 
      <div className="hide-nav-header">
          <div className="sidenavigation height100">
            <SideNavigation />
          </div>
        </div>

    }
        
      </header>
    </>
  );
};

export default Header;
