import React from "react";
import { AiFillCamera } from "react-icons/ai";
import { BiMemoryCard } from "react-icons/bi";
import { FaCaretDown, FaCog } from "react-icons/fa";

const ParentGuardianInfo = () => {
  return (
    <>
      <div className="tab">
        <div className="studentbanner">
          <h5>Parent or Guardian Information</h5>
        </div>
        <form>
          <div className="student-input">
            <div className="student-input__wrapper">
              <div className="relationship">
                <h2>First Parent/Guardian</h2>
                <p>Relation to Student: (please select one)</p>
              </div>
              <div className="inputform bottom">
                <div className="inputgender">
                  <div>
                  <label className="inputgender">
                    <input type="radio" name="radio" />
                    Biological or adoptive mother
                  </label></div>
                  <div>
                  <label className="inputgender">
                    <input type="radio" name="radio" />
                    Step-Mother
                  </label></div>
                  <div>
                  <label className="inputgender">
                    <input type="radio" name="radio" />
                    Other
                  </label></div>
                </div>
              </div>
              <div className="inputform">
                <div className="inputname">
                  <label>Title</label>
                </div>
                <div className="input">
                  <select name="position" id="dept">
                    <option value="position1">Mr.</option>
                    <option value="position2">Ms.</option>
                    <option value="position3">Mrs.</option>
                  </select>
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>Maiden Surname</label>
                </div>
                <div className="input">
                  <input type="type" required />
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>School Year</label>
                </div>
                <div className="input">
                  <input type="type" placeholder="2021-2022" required />
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>Grade Level</label>
                </div>
                <div className="input">
                  <select name="position" id="dept">
                    <option value="position1">N/A</option>
                    <option value="position2">Two</option>
                    <option value="position3">Three</option>
                    <option value="position4">Four</option>
                  </select>
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>Section Name</label>
                </div>
                <div className="input">
                  <select name="position" id="dept">
                    <option value="position1">--</option>
                    <option value="position2">Two</option>
                    <option value="position3">Three</option>
                    <option value="position4">Four</option>
                  </select>
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>Student No.</label>
                </div>
                <div className="input">
                  <input type="type" placeholder="FCA-2021-046" required />
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>Learn Reference No:</label>
                </div>
                <div className="input">
                  <input type="type" required />
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>First Name</label>
                </div>
                <div className="input">
                  <input type="type" required />
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>Middle Name</label>
                </div>
                <div className="input">
                  <input type="type" required />
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>Last Name</label>
                </div>
                <div className="input">
                  <input type="type" required />
                </div>
              </div>

              <div className="inputform bottom">
                <div className="inputname">
                  <label>Gender</label>
                </div>
                <div className="inputgender">
                  <label className="inputgender">
                    <input type="radio" name="gender" />
                    Male
                  </label>
                  <label className="inputgender">
                    <input type="radio" name="gender" />
                    Female
                  </label>
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>Date of Birth</label>
                </div>
                <div className="input">
                  <input type="date" required />
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>Place Of Birth</label>
                </div>
                <div className="input">
                  <input type="type" required />
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>Phone</label>
                </div>
                <div className="input">
                  <input type="number" required />
                </div>
              </div>
            </div>
          </div>

          <div className="seperation-line"></div>
          <div className="student-input">
            <div className="student-input__wrapper">
              <h2>student residence</h2>

              <div className="inputform">
                <div className="inputname">
                  <label>Current Residence</label>
                </div>
                <div className="input">
                  <input type="type" required />
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>City</label>
                </div>
                <div className="input">
                  <input type="type" required />
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>Province</label>
                </div>
                <div className="input">
                  <input type="type" required />
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>Postal</label>
                </div>
                <div className="input">
                  <input type="type" required />
                </div>
              </div>
            </div>
          </div>

          <div className="seperation-line"></div>
          <div className="student-input">
            <div className="student-input__wrapper">
              <h2>school history</h2>

              <div className="inputform">
                <div className="inputname">
                  <label>Name of Last School Attended</label>
                </div>
                <div className="input">
                  <input type="type" required />
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>School Address</label>
                </div>
                <div className="input">
                  <input type="type" required />
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>GPA last school year</label>
                </div>
                <div className="input">
                  <input type="type" required />
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>
                    Was the student ever submitted to any form of discriplinary
                    action? is so, why?
                  </label>
                </div>
                <div className="input">
                  <textarea
                    name=""
                    id=""
                    cols="140"
                    rows="10"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="seperation-line"></div>
          <div className="student-input">
            <div className="student-input__wrapper">
              <h2>Medica History</h2>

              <p>
                Are there any serious medical condition about which you wish the
                school to be aware? Please indicate below{" "}
              </p>

              <div className="inputform">
                <div className="inputname">
                  <label>Medical Notes</label>
                </div>
                <div className="input">
                  <textarea
                    name=""
                    id=""
                    cols="140"
                    rows="10"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>Pediatrician/Family Doctor</label>
                </div>
                <div className="input">
                  <input type="type" required />
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>Contact Number</label>
                </div>
                <div className="input">
                  <input type="type" required />
                </div>
              </div>
            </div>
          </div>

          <div className="seperation-line"></div>

          <div className="student-input">
            <div className="student-input__wrapper">
              <h2>Medica History</h2>

              <div className="inputform">
                <div className="inputname">
                  <label>
                    Are there any family circumstances about which you wish the
                    schoolto be aware?
                  </label>
                </div>
                <div className="input">
                  <textarea
                    name=""
                    id=""
                    cols="140"
                    rows="10"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="student-input">
            <div className="student-input__wrapper">
              <div className="studentinfo-button">
                <button>
                  <span className="margin-r-1rem">
                    <BiMemoryCard />
                  </span>
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      
    </>
  );
};

export default ParentGuardianInfo;
