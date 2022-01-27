
import React from "react";
import SearchBanner from "../../banner/SearchBanner";
import Header from "../../header/Header";
import SideNavigation from "../../sidenavigation/SideNavigation";
import ClassesTable from "./classestable/ClassesTable";

const Classes = () => {
  return (
    <>
      <Header />
      
      <div className="searchbanner width88">
        <div className="searchbanner__wrapper ">
          <div>
            <h1 >Classes</h1>
          </div>
      <SearchBanner />
        </div>
      </div>

      <ClassesTable/>
      <div className="hide-nav">
      <div className="sidenavigation width12 height100">
      <SideNavigation /></div>
      
      </div>
    </>
  );
};

export default Classes;
