import React from "react";
import { FaCaretDown, FaCog } from "react-icons/fa";
import SearchBanner from "../../banner/SearchBanner";
import Header from "../../header/Header";
import SideNavigation from "../../sidenavigation/SideNavigation";
import Spinner from "../../widget/Spinner";

const StudentCreateNew = () => {
  return (
    <>
      <Header />
      <SearchBanner />
      <div className="student-info-box">
        <div className="container95">
          <div className="student-info-box__wrapper">
            <div className="student-info-secondbox">
              <div className="tab">
                <div className="studentlist">
                  <div className="studentlist__wrapper">
                    <table>
                      <tr>
                        <th>#</th>
                        <th>Enrollment Status</th>
                        <th>Learner Ref. No.</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Grade Name</th>
                        <th>Reg. Date tname</th>
                        <th>Action</th>
                      </tr>
                      <tr className="red-critical">
                        <td>1</td>
                        <td>Temporary</td>
                        <td></td>
                        <td>Ubeda</td>
                        <td>Alxander</td>
                        <td>N/A</td>
                        <td>2021-12-02</td>
                        <td className="t-center">
                          <div className="dropdown">
                            <span>
                              <FaCog />
                              <FaCaretDown />
                            </span>
                            <div className="dropdown-content">
                              <p>
                                <button>View</button>
                              </p>
                              <p>
                                <button>Edit</button>
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr className="red-critical">
                        <td>2</td>
                        <td>Temporary</td>
                        <td></td>
                        <td>Mendoza</td>
                        <td>Dhan Joseph</td>
                        <td>N/A</td>
                        <td>2021-11-02</td>
                        <td className="t-center">
                          <div className="dropdown">
                            <span>
                              <FaCog />
                              <FaCaretDown />
                            </span>
                            <div className="dropdown-content">
                              <p>
                                <button>View</button>
                              </p>
                              <p>
                                <button>Edit</button>
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr className="bg-lightenblack ">
                        <td>3</td>
                        <td>Temporary</td>
                        <td>4280017150035</td>
                        <td>Del Monte</td>
                        <td>Rain Luke</td>
                        <td>N/A</td>
                        <td>2021-11-02</td>
                        <td className="t-center">
                          <div className="dropdown">
                            <span>
                              <FaCog />
                              <FaCaretDown />
                            </span>
                            <div className="dropdown-content">
                              <p>
                                <button>View</button>
                              </p>
                              <p>
                                <button>Edit</button>
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>Temporary</td>
                        <td>4280017150035</td>
                        <td>Del Monte</td>
                        <td>Rain Luke</td>
                        <td>N/A</td>
                        <td>2021-11-02</td>
                        <td className="t-center">
                          <div className="dropdown">
                            <span>
                              <FaCog />
                              <FaCaretDown />
                            </span>
                            <div className="dropdown-content">
                              <p>
                                <button>View</button>
                              </p>
                              <p>
                                <button>Edit</button>
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>5</td>
                        <td>Temporary</td>
                        <td>4280017150035</td>
                        <td>Del Monte</td>
                        <td>Rain Luke</td>
                        <td>N/A</td>
                        <td>2021-11-02</td>
                        <td className="t-center">
                          <div className="dropdown">
                            <span>
                              <FaCog />
                              <FaCaretDown />
                            </span>
                            <div className="dropdown-content">
                              <p>
                                <button>View</button>
                              </p>
                              <p>
                                <button>Edit</button>
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>6</td>
                        <td>Temporary</td>
                        <td>4280017150035</td>
                        <td>Del Monte</td>
                        <td>Rain Luke</td>
                        <td>N/A</td>
                        <td>2021-11-02</td>
                        <td className="t-center">
                          <div className="dropdown">
                            <span>
                              <FaCog />
                              <FaCaretDown />
                            </span>
                            <div className="dropdown-content">
                              <p>
                                <button>View</button>
                              </p>
                              <p>
                                <button>Edit</button>
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>7</td>
                        <td>Temporary</td>
                        <td></td>
                        <td>Del Monte</td>
                        <td>Rain Luke</td>
                        <td>N/A</td>
                        <td>2021-11-02</td>
                        <td className="t-center">
                          <div className="dropdown">
                            <span>
                              <FaCog />
                              <FaCaretDown />
                            </span>
                            <div className="dropdown-content">
                              <p>
                                <button>View</button>
                              </p>
                              <p>
                                <button>Edit</button>
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>8</td>
                        <td>Temporary</td>
                        <td>4280017150035</td>
                        <td>Del Monte</td>
                        <td>Rain Luke</td>
                        <td>N/A</td>
                        <td>2021-11-02</td>
                        <td className="t-center">
                          <div className="dropdown">
                            <span>
                              <FaCog />
                              <FaCaretDown />
                            </span>
                            <div className="dropdown-content">
                              <p>
                                <button>View</button>
                              </p>
                              <p>
                                <button>Edit</button>
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>9</td>
                        <td>Temporary</td>
                        <td>4280017150035</td>
                        <td>Del Monte</td>
                        <td>Rain Luke</td>
                        <td>N/A</td>
                        <td>2021-11-02</td>
                        <td className="t-center">
                          <div className="dropdown">
                            <span>
                              <FaCog />
                              <FaCaretDown />
                            </span>
                            <div className="dropdown-content">
                              <p>
                                <button>View</button>
                              </p>
                              <p>
                                <button>Edit</button>
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>10</td>
                        <td>Temporary</td>
                        <td>4280017150035</td>
                        <td>Del Monte</td>
                        <td>Rain Luke</td>
                        <td>N/A</td>
                        <td>2021-11-02</td>
                        <td className="t-center">
                          <div className="dropdown">
                            <span>
                              <FaCog />
                              <FaCaretDown />
                            </span>
                            <div className="dropdown-content">
                              <p>
                                <button>View</button>
                              </p>
                              <p>
                                <button>Edit</button>
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>

                    <div className="student-input margin-top20 button-showmore">
                      <div className="student-input__wrapper margin-bottom20">
                        <div className="studentinfo-button">
                          <button>Show More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideNavigation />
    </>
  );
};

export default StudentCreateNew;
