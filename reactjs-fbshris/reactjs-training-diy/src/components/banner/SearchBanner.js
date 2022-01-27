import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const SearchBanner = () => {
  return (
    <>    
    <div className="searchbar-box">
        <div className="search-recomen">
                <input type="type" placeholder="Search"/>
                          <div className="search-recomen-content">
                            <p><option value="name">Cyrene Lumabas</option></p>
                            <p>
                              <option value="name1">View</option>
                            </p>
                            <p>
                              <option value="name1">VIEW</option>
                            </p>
                          </div>
                        </div>
                
          <button className="seacrchicon">
            <BsSearch />
          </button>          
    </div>
                
          <div className="buttoncreatenew ">
            <button>
              <a href="/Student" className="item-center">
                <span>
                  <AiFillPlusCircle />
                </span>Create New</a>
            </button>
          </div>
    </>
  );
};

export default SearchBanner;
