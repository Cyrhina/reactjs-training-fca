import React from "react";
import { FaCaretDown, FaCog } from "react-icons/fa";
import SearchBanner from "../../banner/SearchBanner";
import Header from "../../header/Header";
import SideNavigation from "../../sidenavigation/SideNavigation";

const StudentCreateNew = () => {
  return (
    <>
      <Header />
      <div className="searchbanner width88">
        <div className="searchbanner__wrapper ">
          <div>
            <h1>Students</h1>
          </div>
          <SearchBanner />
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
                    <th className="td-block">Enrollment Status</th>
                    <th className="td-block">Learner Ref. No.</th>
                    <th>Last Name</th>
                    <th className="td-block-fn">First Name</th>
                    <th className="td-block">Grade Name</th>
                    <th className="td-block">Reg. Date tname</th>
                    <th>Action</th>
                  </tr>
                  <tr className="red-critical">
                    <td>1</td>
                    <td className="td-block">Temporary</td>
                    <td className="td-block"></td>
                    <td>Ubeda</td>
                    <td className="td-block-fn">Alxander</td>
                    <td className="td-block">N/A</td>
                    <td className="td-block">62021-12-02</td>
                    <td className="t-center">
                      <div className="dropdown">
                        <span>
                          <FaCog />
                          <FaCaretDown />
                        </span>
                        <div className="dropdown-content">
                          <p>
                            <button>
                              <a href="#">View</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">Edit</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">View Grade</a>
                            </button>
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr className="red-critical">
                    <td>2</td>
                    <td className="td-block">Temporary</td>
                    <td className="td-block"></td>
                    <td>Mendoza</td>
                    <td className="td-block-fn">Dhan Joseph</td>
                    <td className="td-block">N/A</td>
                    <td className="td-block">2021-11-02</td>
                    <td className="t-center">
                      <div className="dropdown">
                        <span>
                          <FaCog />
                          <FaCaretDown />
                        </span>
                        <div className="dropdown-content">
                          <p>
                            <button>
                              <a href="#">View</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">Edit</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">View Grade</a>
                            </button>
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-lightenblack ">
                    <td>3</td>
                    <td className="td-block">Temporary</td>
                    <td className="td-block">4280017150035</td>
                    <td>Del Monte</td>
                    <td className="td-block-fn">Rain Luke</td>
                    <td className="td-block">N/A</td>
                    <td className="td-block">2021-11-02</td>
                    <td className="t-center">
                      <div className="dropdown">
                        <span>
                          <FaCog />
                          <FaCaretDown />
                        </span>
                        <div className="dropdown-content">
                          <p>
                            <button>
                              <a href="#">View</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">Edit</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">View Grade</a>
                            </button>
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td className="td-block">Temporary</td>
                    <td className="td-block">4280017150035</td>
                    <td>Del Monte</td>
                    <td className="td-block-fn">Rain Luke</td>
                    <td className="td-block">N/A</td>
                    <td className="td-block">2021-11-02</td>
                    <td className="t-center">
                      <div className="dropdown">
                        <span>
                          <FaCog />
                          <FaCaretDown />
                        </span>
                        <div className="dropdown-content">
                          <p>
                            <button>
                              <a href="#">View</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">Edit</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">View Grade</a>
                            </button>
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td className="td-block">Temporary</td>
                    <td className="td-block">4280017150035</td>
                    <td>Del Monte</td>
                    <td className="td-block-fn">Rain Luke</td>
                    <td className="td-block">N/A</td>
                    <td className="td-block">2021-11-02</td>
                    <td className="t-center">
                      <div className="dropdown">
                        <span>
                          <FaCog />
                          <FaCaretDown />
                        </span>
                        <div className="dropdown-content">
                          <p>
                            <button>
                              <a href="#">View</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">Edit</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">View Grade</a>
                            </button>
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>6</td>
                    <td className="td-block">Temporary</td>
                    <td className="td-block">4280017150035</td>
                    <td>Del Monte</td>
                    <td className="td-block-fn">Rain Luke</td>
                    <td className="td-block">N/A</td>
                    <td className="td-block">2021-11-02</td>
                    <td className="t-center">
                      <div className="dropdown">
                        <span>
                          <FaCog />
                          <FaCaretDown />
                        </span>
                        <div className="dropdown-content">
                          <p>
                            <button>
                              <a href="#">View</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">Edit</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">View Grade</a>
                            </button>
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>7</td>
                    <td className="td-block">Temporary</td>
                    <td className="td-block">4280017150035</td>
                    <td>Del Monte</td>
                    <td className="td-block-fn">Rain Luke</td>
                    <td className="td-block">N/A</td>
                    <td className="td-block">2021-11-02</td>
                    <td className="t-center">
                      <div className="dropdown">
                        <span>
                          <FaCog />
                          <FaCaretDown />
                        </span>
                        <div className="dropdown-content">
                          <p>
                            <button>
                              <a href="#">View</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">Edit</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">View Grade</a>
                            </button>
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>8</td>
                    <td className="td-block">Temporary</td>
                    <td className="td-block">4280017150035</td>
                    <td>Del Monte</td>
                    <td className="td-block-fn">Rain Luke</td>
                    <td className="td-block">N/A</td>
                    <td className="td-block">2021-11-02</td>
                    <td className="t-center">
                      <div className="dropdown">
                        <span>
                          <FaCog />
                          <FaCaretDown />
                        </span>
                        <div className="dropdown-content">
                          <p>
                            <button>
                              <a href="#">View</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">Edit</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">View Grade</a>
                            </button>
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>9</td>
                    <td className="td-block">Temporary</td>
                    <td className="td-block">4280017150035</td>
                    <td>Del Monte</td>
                    <td className="td-block-fn">Rain Luke</td>
                    <td className="td-block">N/A</td>
                    <td className="td-block">2021-11-02</td>
                    <td className="t-center">
                      <div className="dropdown">
                        <span>
                          <FaCog />
                          <FaCaretDown />
                        </span>
                        <div className="dropdown-content">
                          <p>
                            <button>
                              <a href="#">View</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">Edit</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">View Grade</a>
                            </button>
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>10</td>
                    <td className="td-block">Temporary</td>
                    <td className="td-block">4280017150035</td>
                    <td>Del Monte</td>
                    <td className="td-block-fn">Rain Luke</td>
                    <td className="td-block">N/A</td>
                    <td className="td-block">2021-11-02</td>
                    <td className="t-center">
                      <div className="dropdown">
                        <span>
                          <FaCog />
                          <FaCaretDown />
                        </span>
                        <div className="dropdown-content">
                          <p>
                            <button>
                              <a href="#">View</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">Edit</a>
                            </button>
                          </p>
                          <p>
                            <button>
                              <a href="#">View Grade</a>
                            </button>
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>

                {/* <NoData /> */}
              </div>
            </div>
            <div className="student-input margin-top20 button-showmore">
              <div className="student-input__wrapper margin-bottom20">
                <div className="studentinfo-button">
                  <button> Show More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hide-nav">
        <div className="sidenavigation width12 height100">
          <SideNavigation />
        </div>
      </div>
    </>
  );
};

export default StudentCreateNew;
