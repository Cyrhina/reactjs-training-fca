import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const ModalSuccess = () => {
  return (
    <>
      <div className="modal modal-front">
        <div className="display-center">
          <div className="bg--white">
            <div className="dialogbox color-green mb--10">
              <AiFillCheckCircle />
            </div>
            <h4 className="t-center mb--20">Successfully Loaded!</h4>
            <div className="button-container">
              <button className="btn">OK</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSuccess;
