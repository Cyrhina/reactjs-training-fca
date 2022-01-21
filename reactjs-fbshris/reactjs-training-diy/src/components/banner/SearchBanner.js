import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const SearchBanner = () => {
  return (
    <>
      <div className="searchbanner width88">
        <div className="searchbanner__wrapper ">
          <div>
            <h1>Students</h1>
          </div>
          <input type="type" placeholder="Search" required />
          <button className="seacrchicon">
            <BsSearch />
          </button>
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
    </>
  );
};

export default SearchBanner;
