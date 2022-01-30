import React, {useState} from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import SearchBanner from "../../banner/SearchBanner";
import Header from "../../header/Header";
import SideNavigation from "../../sidenavigation/SideNavigation";
import NoData from "../../widget/NoData";
import ModalConfirm from "../../widget/ModalConfirm";
import ModalSuccess from "../../widget/ModalSuccess";
import Spinner from "../../widget/Spinner";
import SpinnerButton from "../../widget/SpinnerButton";
import ModalAddTeacher from "../setting/settingteacher/ModalAddTeacher";
import ModalAddSubject from "../setting/settingsubject/ModalAddSubject";
import ModalAddSection from "../setting/settingsection/ModalAddSection";
import ModalAddRoom from "../setting/settingroom/ModalAddRoom";
import ModalAddRole from "../setting/settingrole/ModalAddRole";
import ModalAddClassLevel from "../setting/settingclevel/ModalAddClassLevel";
import ModalClassesAdd from "../classes/classes-action-view/ModalClassesAdd";
import ModalClassesEdit from "../classes/classes-action-view/ModalClassesEdit";

const Home = () => {
  return (
    <>
      <Header />
      <div className="searchbanner width88">
        <div className="searchbanner__wrapper ">
          <div>
            <h1>Classes</h1>
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
                    <th className="td-block">Learn Ref. No.</th>
                    <th className="td-block">Student No.</th>
                    <th>Last Name</th>
                    <th className="td-block-fn">First Name</th>
                    <th className="td-block">Middle</th>
                    <th>Gender</th>
                  </tr>
                </table>
                <NoData />
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

export default Home;
