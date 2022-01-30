import React from "react";
import { AiTwotoneSetting } from "react-icons/ai";

const UpdateBox = () => {
  return (
    <>
      <div className="student-info-box width88 ">
        <div className="container95">
          <div className="grid column3">
            <div className="update-box">
              <h2>
                <span>Class Level</span>
              </h2>
              <p>Manage the Class Levels in every SChool Year.</p>
              <a href="/SettingClassLevel">
                <button>
                  <span>
                    <AiTwotoneSetting />
                  </span>
                  Update
                </button>
              </a>
            </div>

            <div className="update-box">
              <h2>
                <span>Teacher</span>
              </h2>
              <p>Manage the Class Levels in every SChool Year.</p>
              <a href="/SettingTeacher">
                <button>
                  <span>
                    <AiTwotoneSetting />
                  </span>
                  Update
                </button>
              </a>
            </div>

            <div className="update-box">
              <h2>
                <span>Sections</span>
              </h2>
              <p>Manage the Class Levels in every SChool Year.</p>
              <a href="/SettingSection">
                <button>
                  <span>
                    <AiTwotoneSetting />
                  </span>
                  Update
                </button>
              </a>
            </div>

            <div className="update-box">
              <h2>
                <span>Room</span>
              </h2>
              <p>Manage the Class Levels in every SChool Year.</p>
              <a href="/SettingRoom">
                <button>
                  <span>
                    <AiTwotoneSetting />
                  </span>
                  Update
                </button>
              </a>
            </div>

            <div className="update-box">
              <h2>
                <span>Subjects</span>
              </h2>
              <p>Manage the Class Levels in every SChool Year.</p>
              <a href="/SettingSubject">
                <button>
                  <span>
                    <AiTwotoneSetting />
                  </span>
                  Update
                </button>
              </a>
            </div>

            <div className="update-box">
              <h2>
                <span>Role</span>
              </h2>
              <p>Manage the Class Levels in every SChool Year.</p>
              <a href="/SettingRole">
                <button>
                  <span>
                    <AiTwotoneSetting />
                  </span>
                  Update
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateBox;
