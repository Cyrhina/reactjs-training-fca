import React, {useState} from "react";
import Header from "../../../header/Header";
import SideNavigation from "../../../sidenavigation/SideNavigation";

const ClassesView = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => setIsShow(!isShow)
  return (
    <>
      <Header />
      <div className="searchbanner width88">
        <div className="searchbanner__wrapper ">
          <div>
            <h1>Grade 1 A</h1>
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
                    <th className="td-block">Learn Ref. No.</th>
                    <th className="td-block">Student No.</th>
                    <th>Last Name</th>
                    <th className="td-block-fn">First Name</th>
                    <th className="td-block">Middle</th>
                    <th>Gender</th>
                  </tr>

                  <tr>
                    <td className="padding1rem">1</td>
                    <td className="td-block ">428017200001</td>
                    <td className="td-block">FCA-2021-015</td>
                    <td>laluon</td>
                    <td className="td-block-fn">Jhon Christian</td>
                    <td className="td-block"></td>
                    <td>Male</td>
                  </tr>

                  <tr>
                    <td className="padding1rem">2</td>
                    <td className="td-block">428017200002</td>
                    <td className="td-block">FCA-2021-014</td>
                    <td>Vasquez</td>
                    <td className="td-block-fn">Crystal Pearl</td>
                    <td className="td-block"></td>
                    <td>Female</td>
                  </tr>
                </table>
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

export default ClassesView;
