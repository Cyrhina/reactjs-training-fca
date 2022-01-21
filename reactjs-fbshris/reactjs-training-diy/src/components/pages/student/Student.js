import React from "react";
import Header from "../../header/Header";
import SideNavigation from "../../sidenavigation/SideNavigation";
import LegalVerificaton from "./legalverification/LegalVerificaton";
import ParentGuardianInfo from "./parent-guardian-info/ParentGuardianInfo";
import StudentInfo from "./studentinfo/StudentInfo";
import Banner from "../../banner/Banner";

const Student = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="student-info-box">
        <div className="container95">
          <div className="student-info-box__wrapper">
            <div className="student-info-secondbox">
              <div className="tab-menu">
                <StudentInfo />
                <ParentGuardianInfo />
                <LegalVerificaton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideNavigation />
    </>
  );
};

export default Student;
