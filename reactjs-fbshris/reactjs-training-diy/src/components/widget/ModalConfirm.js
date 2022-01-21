import React from "react";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";

const ModalConfirm = () => {
  return (
    <>
      <div className="modal modal-front">
        <div className="display-center">
          <div className="modal-title bg-warning">
            <div className="modal-title__wrapper">
              <span>
                <AiFillCheckCircle />
              </span>
              <h4>Confirmation</h4>
            </div>
            <span>
              <AiOutlineClose />
            </span>
          </div>
          <div className="bg--white">
            <div className="dialogbox color-warning mb--10">
              <AiFillCheckCircle />
            </div>
            <h4 className="t-center mb--20">
              You have successfully updated the information
            </h4>
          </div>
          <div>
            <div className="button-container">
              <button className="btn bg-warning">Okey</button>
              <button className="btn bg-warning">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalConfirm;
