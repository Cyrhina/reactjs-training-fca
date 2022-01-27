
import React from "react";
import Header from "../../header/Header";
import SideNavigation from "../../sidenavigation/SideNavigation";
import ModalAddClassLevel from "./settingclevel/ModalAddClassLevel";
import UpdateBox from "./settingupdate/UpdateBox";

const Setting = () => {
  return (
    <>
    
      <Header />
      <div className="searchbanner width88">
        <div className="searchbanner__wrapper ">
          <div>
            <h1>Setting</h1>
          </div>
      </div>
      </div>

      <UpdateBox/>

      <div className="hide-nav">
      <div className="sidenavigation width12 height100">
      <SideNavigation /></div>
      
      </div>
    </>
  );
};

export default Setting;
