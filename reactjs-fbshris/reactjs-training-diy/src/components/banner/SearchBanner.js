import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const SearchBanner = () => {
  return (
    <>
      <div className="searchbanner">
        <div className="searchbanner__wrapper ">
          <label>Students</label>
          <input type="type" placeholder="Search" required />
          <button>
            <BsSearch />
          </button>
          <div className="buttoncreatenew">
            <button>
              <a href="/Student">
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
