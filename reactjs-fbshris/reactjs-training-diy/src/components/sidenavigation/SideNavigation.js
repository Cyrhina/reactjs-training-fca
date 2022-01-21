import React from "react";
import logo from "../../img/logo-white.png";
import { AiFillDashboard, AiTwotoneSetting } from "react-icons/ai";
import { BsFillPersonFill, BsMegaphoneFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import {
  FaClipboardList,
  FaClipboardCheck,
  FaClipboard,
  FaUserCog,
} from "react-icons/fa";

const SideNavigation = () => {
  return (
    <>
      <div className="sidenavigation">
        <div className="sidenavigation__wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            {/*<h2>fca smis</h2>*/}
          </div>
          <nav>
            <ul>
              <li id="menu-page1">
                <a href="#">
                  <span>
                    <AiFillDashboard />
                  </span>
                  Dashboard
                </a>
              </li>
              <li id="menu-page2" className="active">
                <a href="/">
                  <span>
                    <BsFillPersonFill />
                  </span>
                  Student
                </a>
              </li>
              <li id="menu-page3">
                <a href="#">
                  <span>
                    <IoIosPeople />
                  </span>
                  Classes
                </a>
              </li>
              <li id="menu-page4">
                <a href="#">
                  <span>
                    <FaClipboardList />
                  </span>
                  Subjects
                </a>
              </li>
              <li id="menu-page5">
                <a href="#">
                  <span>
                    <FaClipboardCheck />
                  </span>
                  Grades
                </a>
              </li>
              <li id="menu-page6">
                <a href="#">
                  <span>
                    <BsMegaphoneFill />
                  </span>
                  Announcement
                </a>
              </li>
              <li id="menu-page7">
                <a href="#">
                  <span>
                    <FaUserCog />
                  </span>
                  Users
                </a>
              </li>
              <li id="menu-page7">
                <a href="#">
                  <span>
                    <AiTwotoneSetting />
                  </span>
                  Setting
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideNavigation;
