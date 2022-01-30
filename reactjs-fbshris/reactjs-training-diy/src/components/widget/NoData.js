import React from "react";
import { AiFillFolderOpen } from "react-icons/ai";

const NoData = () => {
  return (
    <>
      <div className="nodata">
        <div className="nodata__wrapper">
          <span>
            <AiFillFolderOpen />
          </span>
          <h3>No Data</h3>
        </div>
      </div>
    </>
  );
};

export default NoData;
