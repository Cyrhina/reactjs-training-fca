import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const ModalSuccess = () => {
  return (
    <>
      <div className="modal modal-front">
        <div className="display-center">
          <div className="modal-title">
            <AiFillCheckCircle />
            <h4>Update</h4>
          </div>
          <div className="bg--white">
            <div className="dialogbox color-green mb--10">
              <AiFillCheckCircle />
            </div>
            <h4 className="t-center mb--20">
              You have successfully updated the information
            </h4>
            <div className="button-container">
              <button className="btn">Okey</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSuccess;
