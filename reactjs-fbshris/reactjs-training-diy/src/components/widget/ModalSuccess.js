import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const ModalSuccess = () => {
  return (
    <>
      <div className="modal ">
        <div className="display-center">
          <div className="modal-title bg-green">
            <div className="modal-title__wrapper">
              <span>
                <AiFillCheckCircle />
              </span>
              <h4>Update</h4>
            </div>
          </div>
          <div className="bg--white">
            <div className="dialogbox color-green mb--10">
              <AiFillCheckCircle />
            </div>
            <h4 className="t-center mb--20">
              You have successfully updated the information
            </h4>
          </div>
          <div className="button-container">
            <button className="btn bg-green padding1rem">Okey</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSuccess;
