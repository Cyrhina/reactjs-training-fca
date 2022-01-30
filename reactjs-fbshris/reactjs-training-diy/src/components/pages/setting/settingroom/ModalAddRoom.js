import React from "react";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import { GrDocument } from "react-icons/gr";

const ModalAddRoom = () => {
  return (
    <>
      <div className="modal">
        <div className="display-center">
          <div className="modal-title bg-green">
            <div className="modal-title__wrapper">
              <span>
                <AiFillCheckCircle />
              </span>
              <h4>Add Room Level</h4>
            </div>
            <span>
              <AiOutlineClose />
            </span>
          </div>
          <div className="bg--white">
            <div className="addform">
              <form>
                <div className="inputaddform">
                  <div className="inputaddname">
                    <label>Status</label>
                  </div>
                  <div className="select-grade">
                    <select name="position" id="dept">
                      <option value="position1">Active</option>
                      <option value="position2">Off Active</option>
                    </select>
                  </div>
                </div>

                <div className="inputaddform">
                  <div className="inputaddname">
                    <label>Name</label>
                  </div>
                  <div className="input">
                    <input type="type" required />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div className="button-container">
              <button className="bg-green btn">Add</button>
              <button className="bg-light-gray btn">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAddRoom;
