import React from "react";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";

const ModalAddTwo = () => {
  return (
    <>
      <div className="modal modal-front">
        <div className="display-center">
          <div className="modal-title bg-green">
            <div className="modal-title__wrapper">
              <span>
                <AiFillCheckCircle />
              </span>
              <h4>New Student</h4>
            </div>
            <span>
              <AiOutlineClose />
            </span>
          </div>
          <div className="bg--white modalbody">
            <div className="addform">
              <form>
                <div className="inputaddform">
                  <div className="inputaddname">
                    <label>First Name</label>
                  </div>
                  <div className="inputnewstudent">
                    <input type="type" required />
                  </div>
                </div>

                <div className="inputaddform">
                  <div className="inputaddname">
                    <label>Middle Name</label>
                  </div>
                  <div className="inputnewstudent">
                    <input type="type" required />
                  </div>
                </div>

                <div className="inputaddform">
                  <div className="inputaddname">
                    <label>Last Name</label>
                  </div>
                  <div className="inputnewstudent">
                    <input type="type" required />
                  </div>
                </div>

                <div className="inputaddform">
                  <div className="inputaddname">
                    <label>Gender</label>
                  </div>
                  <div className="inputaddname">
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
              </form>
            </div>
          </div>
          <div>
            <div className="button-container">
              <button className="btn bg-green">Add</button>
              <button className="btn bg-green">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAddTwo;
