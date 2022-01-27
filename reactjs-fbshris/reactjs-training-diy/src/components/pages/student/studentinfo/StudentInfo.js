import React from "react";
import personone from "../../../../img/jhonny.png";
import { AiFillCamera } from "react-icons/ai";
import { BiMemoryCard } from "react-icons/bi";

const StudentInfo = () => {
  return (
    <>
      <div className="tab">
        <div className="studentbanner">
          <h5>Student Information</h5>
        </div>
        <form>
          <div className="student-tab">
            <h2>Profile Image</h2>
            <div className="student-profile">
              <div className="profile-img">
              <img src={personone} alt="profile-picture" />
              </div>
              <span>
                <AiFillCamera />
              </span>
            </div>
            <h3>*Max 60kb upload</h3>
          </div>
          <div className="student-input">
            <div className="student-input__wrapper">
              <div className="inputform">
                <div className="inputname">
                  <label>Entrollment status</label>
                </div>
                <div className="input">
                  <select name="position" id="dept">
                    <option value="position1">Official</option>
                    <option value="position2">TwoOfficial</option>
                    <option value="position3">ThreeOfficial</option>
                    <option value="position4">FourOfficial</option>
                  </select>
                </div>
              </div>

              <div className="inputform">
                <div className="inputname">
                  <label>Date of Registration</label>
                </div>
                <div className="input">
                  <input type="date" required />
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
                    cols="50"
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

export default StudentInfo;
