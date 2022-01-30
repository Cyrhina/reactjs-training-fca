import React from "react";
import logo from "../../img/logo-white.png";
import logoone from "../../img/logo.png";
import { AiFillDashboard, AiTwotoneSetting } from "react-icons/ai";
import { BsFillPersonFill, BsMegaphoneFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FaClipboardList, FaClipboardCheck, FaUserCog } from "react-icons/fa";

const SideNavigation = () => {
  return (
    <>
      <div className="sidenavigation__wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
          {/*<h2>fca smis</h2>*/}
        </div>
        <div className="logosolo">
          <img src={logoone} alt="logo" />
        </div>
        <nav>
          <ul>
            <li id="menu-page1" className="active">
              <a href="/">
                <span>
                  <AiFillDashboard />
                </span>
                <h3>Dashboard</h3>
              </a>
            </li>
            <li id="menu-page2">
              <a href="/StudentCreateNew">
                <span>
                  <BsFillPersonFill />
                </span>
                <h3>Student</h3>
              </a>
            </li>
            <li id="menu-page3">
              <a href="/Classes">
                <span>
                  <IoIosPeople />
                </span>
                <h3>Classes</h3>
              </a>
            </li>
            <li id="menu-page4">
              <a href="/">
                <span>
                  <FaClipboardList />
                </span>
                <h3>Subjects</h3>
              </a>
            </li>
            <li id="menu-page5">
              <a href="/">
                <span>
                  <FaClipboardCheck />
                </span>
                <h3>Grades</h3>
              </a>
            </li>
            <li id="menu-page6">
              <a href="/">
                <span>
                  <BsMegaphoneFill />
                </span>
                <h3>Announcement</h3>
              </a>
            </li>
            <li id="menu-page7">
              <a href="/">
                <span>
                  <FaUserCog />
                </span>
                <h3>Users</h3>
              </a>
            </li>
            <li id="menu-page7">
              <a href="/Setting">
                <span>
                  <AiTwotoneSetting />
                </span>
                <h3>Setting</h3>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideNavigation;
