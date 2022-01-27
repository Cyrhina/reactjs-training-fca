
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaCaretDown, FaCog } from "react-icons/fa";
import Header from "../../../header/Header";
import SideNavigation from "../../../sidenavigation/SideNavigation";

const SettingTeacher = () => {
  return (
    <>
    <Header />
      <div className="searchbanner width88">
        <div className="searchbanner__wrapper ">
          <div>
            <h1>Teacher</h1>
          </div>

          <div className="buttoncreatenew">
            <button>
              <a href="/Student" className="item-center">
                <span>
                  <AiFillPlusCircle />
                </span>
                <span>Create New</span>
              </a>
            </button>
          </div>
      </div>
      </div>

      <div className="student-info-box width88 ">
        <div className="container95">
          <div className="student-info-box__wrapper">
              <div className="studentlist">
                <div className="studentlist__wrapper">
                  <table>
                    <tr>
                      <th>#</th>
                      <th className="td-block">First Name</th>
                      <th>Last Name</th>
                      <th className="td-block">Degree</th>
                      <th className="td-block-fn">Status</th>
                      <th>Action</th>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td className="td-block">Jean</td>
                      <td >Torneo</td>
                      <td className="td-block">BEED</td>
                      <td className="td-block-fn">Active</td>
                      <td className="t-center">
                        <div className="dropdown">
                          <span>
                            <FaCog />
                            <FaCaretDown />
                          </span>
                          <div className="dropdown-content">
                            <p><button><a href="/ClassesView">View</a></button></p>
                            <p>
                              <button><a href="#">Edit</a></button>
                            </p>
                            <p>
                              <button><a href="#">Archieve</a></button>
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td className="td-block">Jean</td>
                      <td >Torneo</td>
                      <td className="td-block">BEED</td>
                      <td className="td-block-fn">Active</td>
                      <td className="t-center">
                        <div className="dropdown">
                          <span>
                            <FaCog />
                            <FaCaretDown />
                          </span>
                          <div className="dropdown-content">
                            <p><button><a href="/ClassesView">View</a></button></p>
                            <p>
                              <button><a href="#">Edit</a></button>
                            </p>
                            <p>
                              <button><a href="#">Archieve</a></button>
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td className="td-block">Jean</td>
                      <td >Torneo</td>
                      <td className="td-block">BEED</td>
                      <td className="td-block-fn">Active</td>
                      <td className="t-center">
                        <div className="dropdown">
                          <span>
                            <FaCog />
                            <FaCaretDown />
                          </span>
                          <div className="dropdown-content">
                            <p><button><a href="/ClassesView">View</a></button></p>
                            <p>
                              <button><a href="#">Edit</a></button>
                            </p>
                            <p>
                              <button><a href="#">Archieve</a></button>
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td className="td-block">Jean</td>
                      <td >Torneo</td>
                      <td className="td-block">BEED</td>
                      <td className="td-block-fn">Active</td>
                      <td className="t-center">
                        <div className="dropdown">
                          <span>
                            <FaCog />
                            <FaCaretDown />
                          </span>
                          <div className="dropdown-content">
                            <p><button><a href="/ClassesView">View</a></button></p>
                            <p>
                              <button><a href="#">Edit</a></button>
                            </p>
                            <p>
                              <button><a href="#">Archieve</a></button>
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td className="td-block">Jean</td>
                      <td >Torneo</td>
                      <td className="td-block">BEED</td>
                      <td className="td-block-fn">Active</td>
                      <td className="t-center">
                        <div className="dropdown">
                          <span>
                            <FaCog />
                            <FaCaretDown />
                          </span>
                          <div className="dropdown-content">
                            <p><button><a href="/ClassesView">View</a></button></p>
                            <p>
                              <button><a href="#">Edit</a></button>
                            </p>
                            <p>
                              <button><a href="#">Archieve</a></button>
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>6</td>
                      <td className="td-block">Jean</td>
                      <td >Torneo</td>
                      <td className="td-block">BEED</td>
                      <td className="td-block-fn">Active</td>
                      <td className="t-center">
                        <div className="dropdown">
                          <span>
                            <FaCog />
                            <FaCaretDown />
                          </span>
                          <div className="dropdown-content">
                            <p><button><a href="/ClassesView">View</a></button></p>
                            <p>
                              <button><a href="#">Edit</a></button>
                            </p>
                            <p>
                              <button><a href="#">Archieve</a></button>
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>7</td>
                      <td className="td-block">Jean</td>
                      <td >Torneo</td>
                      <td className="td-block">BEED</td>
                      <td className="td-block-fn">Active</td>
                      <td className="t-center">
                        <div className="dropdown">
                          <span>
                            <FaCog />
                            <FaCaretDown />
                          </span>
                          <div className="dropdown-content">
                            <p><button><a href="/ClassesView">View</a></button></p>
                            <p>
                              <button><a href="#">Edit</a></button>
                            </p>
                            <p>
                              <button><a href="#">Archieve</a></button>
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>8</td>
                      <td className="td-block">Jean</td>
                      <td >Torneo</td>
                      <td className="td-block">BEED</td>
                      <td className="td-block-fn">Active</td>
                      <td className="t-center">
                        <div className="dropdown">
                          <span>
                            <FaCog />
                            <FaCaretDown />
                          </span>
                          <div className="dropdown-content">
                            <p><button><a href="/ClassesView">View</a></button></p>
                            <p>
                              <button><a href="#">Edit</a></button>
                            </p>
                            <p>
                              <button><a href="#">Archieve</a></button>
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    
                  </table>

                </div>
              </div>
            </div>
        </div>
      </div>
      
      <div className="hide-nav">
      <div className="sidenavigation width12 height100">
      <SideNavigation /></div>
      
      </div>
    </>
  );
};

export default SettingTeacher;
