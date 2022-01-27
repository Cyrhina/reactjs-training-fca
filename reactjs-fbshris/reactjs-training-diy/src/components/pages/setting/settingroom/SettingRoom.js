
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaCaretDown, FaCog } from "react-icons/fa";
import Header from "../../../header/Header";
import SideNavigation from "../../../sidenavigation/SideNavigation";

const  SettingRoom = () => {
  return (
    <>
    <Header />
      <div className="searchbanner width88">
        <div className="searchbanner__wrapper">
          <div>
            <h1>Rooms</h1>
          </div>
          
          <div className="buttoncreatenew ">
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
                      <th >Name</th>
                      <th className="td-block-fn">Status</th>
                      <th>Action</th>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td >501</td>
                      <td className="td-block-fn">Active</td>
                      <td className="t-center">
                        <div className="dropdown">
                          <span>
                            <FaCog />
                            <FaCaretDown />
                          </span>
                          <div className="dropdown-content">
                            <p><button><a href="/ClassesView">Edit</a></button></p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td >501</td>
                      <td className="td-block-fn">Active</td>
                      <td className="t-center">
                        <div className="dropdown">
                          <span>
                            <FaCog />
                            <FaCaretDown />
                          </span>
                          <div className="dropdown-content">
                            <p><button><a href="/ClassesView">Edit</a></button></p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td >501</td>
                      <td className="td-block-fn">Active</td>
                      <td className="t-center">
                        <div className="dropdown">
                          <span>
                            <FaCog />
                            <FaCaretDown />
                          </span>
                          <div className="dropdown-content">
                            <p><button><a href="/ClassesView">Edit</a></button></p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td >501</td>
                      <td className="td-block-fn">Active</td>
                      <td className="t-center">
                        <div className="dropdown">
                          <span>
                            <FaCog />
                            <FaCaretDown />
                          </span>
                          <div className="dropdown-content">
                            <p><button><a href="/ClassesView">Edit</a></button></p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td >501</td>
                      <td className="td-block-fn">Active</td>
                      <td className="t-center">
                        <div className="dropdown">
                          <span>
                            <FaCog />
                            <FaCaretDown />
                          </span>
                          <div className="dropdown-content">
                            <p><button><a href="/ClassesView">Edit</a></button></p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>6</td>
                      <td >501</td>
                      <td className="td-block-fn">Active</td>
                      <td className="t-center">
                        <div className="dropdown">
                          <span>
                            <FaCog />
                            <FaCaretDown />
                          </span>
                          <div className="dropdown-content">
                            <p><button><a href="/ClassesView">Edit</a></button></p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>7</td>
                      <td >501</td>
                      <td className="td-block-fn">Active</td>
                      <td className="t-center">
                        <div className="dropdown">
                          <span>
                            <FaCog />
                            <FaCaretDown />
                          </span>
                          <div className="dropdown-content">
                            <p><button><a href="/ClassesView">Edit</a></button></p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>8</td>
                      <td >501</td>
                      <td className="td-block-fn">Active</td>
                      <td className="t-center">
                        <div className="dropdown">
                          <span>
                            <FaCog />
                            <FaCaretDown />
                          </span>
                          <div className="dropdown-content">
                            <p><button><a href="/ClassesView">Edit</a></button></p>
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

export default SettingRoom;
