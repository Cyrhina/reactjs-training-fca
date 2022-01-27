import React from "react";
import Header from "../../header/Header";
import SideNavigation from "../../sidenavigation/SideNavigation";
import LegalVerificaton from "./legalverification/LegalVerificaton";
import ParentGuardianInfo from "./parent-guardian-info/ParentGuardianInfo";
import StudentInfo from "./studentinfo/StudentInfo";

const Student = () => {
  return (
    <>
      <Header />
      <div className="banner width88">
        <div className="banner__wrapper">
          <h1>Students: Alexander Obeda</h1>
        </div>
      </div>
      <div className="student-info-box width88">
        <div className="container95">
          <div className="student-info-box__wrapper">
            <div className="student-info-secondbox">
              <div className="tab-menu">
                <input type="radio" name="tabs" id="tab-1" defaultChecked />
                <label htmlFor="tab-1" className="menu-label">
                  <span>Student Info</span>
                </label>
                <StudentInfo />

                <input type="radio" name="tabs" id="tab-2" />
                <label htmlFor="tab-2" className="menu-label">
                  <span>Parent/Guardian Info</span>
                </label>
                <ParentGuardianInfo />

                <input type="radio" name="tabs" id="tab-3" />
                <label htmlFor="tab-3" className="menu-label">
                  <span className="active">Legal Verification</span>
                </label>
                <LegalVerificaton />
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

export default Student;
