import React from "react";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";

const ModalClassesAdd = () => {
  return (
    <>
      <div className="modal">
        <div className="display-center">
          <div className="modal-title bg-green">
            <div className="modal-title__wrapper">
              <span>
                <AiFillCheckCircle />
              </span>
              <h4>New Class</h4>
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
                    <label>Class Level</label>
                  </div>
                  <div className="select-grade">
                  <select name="position" id="dept">
                    <option value="position1">--</option>
                    <option value="position2">Grade 1</option>
                    <option value="position3">Grade 2</option>
                    <option value="position4">Grade 3</option>
                  </select>
                </div>
                </div>

                <div className="inputaddform">
                  <div className="inputaddname">
                    <label>Section</label>
                  </div>
                  <div className="select-grade">
                  <select name="position" id="dept">
                    <option value="position1">--</option>
                    <option value="position2">Donna Palomera</option>
                    <option value="position3">Donna Palomera</option>
                    <option value="position4">Donna Palomera</option>
                  </select>
                </div>
                </div>

                <div className="inputaddform">
                  <div className="inputaddname">
                    <label>Capacity</label>
                  </div>
                <div className="input">
                  <input type="type" required />
                </div>
                </div>

                <div className="inputaddform">
                  <div className="inputaddname">
                    <label>Rooms</label>
                  </div>
                  <div className="select-grade">
                  <select name="position" id="dept">
                    <option value="position1">--</option>
                    <option value="position2">201</option>
                    <option value="position3">202</option>
                    <option value="position4">303</option>
                  </select>
                </div>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div className="button-container">
              <button className="bg-green padding1rem">Create</button>
              <button className="bg-light-gray padding1rem">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalClassesAdd;