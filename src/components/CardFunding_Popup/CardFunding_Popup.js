import "./index.css";
import React from "react";
import line from "../../assets/Line 1.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgCloseO } from "react-icons/cg";

const CardFunding_Popup = ({closeModal}) => {
  return (
    <div className="popup-box">
      <div className="popup-content-box">
        <div className="top-modal-box">
          <div className="modal-header">
            <span className="edit">Set Card Funding Charges</span>
          </div>
        </div>
        <div className="popup-form-box">
          <div className="form-box">
            <div className="form-one mt-3">
              <span>Set Model and Amount</span>
              <div className="main-input-box">
                <div className="sign-box">$</div>
                <RiArrowDropDownLine className="arrow" />
                <img src={line} alt="line" />
                <input type="text" placeholder="Amount" />
              </div>
            </div>
            <button className="rate-btn ">Set New Rate</button>
          </div>
        </div>
      </div>
      <CgCloseO onClick={() => closeModal(false)} className="close" />
    </div>
  );
};

export default CardFunding_Popup;
