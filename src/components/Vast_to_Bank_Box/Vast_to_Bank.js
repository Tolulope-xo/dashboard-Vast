import React, { useState } from "react";
import { vast_to_bank } from "../../assets/Data";
import "./../TransactionTypes/transactiontypes.css";
import editicon from "../../assets/Data/Vector.png";
import Vast_to_Vast_Popup from "../Vast_to_Vast_Popup/Vast_to_Vast_Popup";
const Vast_to_Bank = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleclick = () => {
    setModalShow(true);
  };
  return (
    <div>
      {vast_to_bank.map((item, index) => {
        return (
          <div
            className="TransactionTypes-card"
            style={{
              backgroundColor: item.bgColor,
              backgroundImage: `url(${item.pattern})`,
            }}
          >
            <div>
              <p className="title12">{item.title}</p>
              <h3 className="rate1">{item.rate}</h3>
            </div>
            <div onClick={handleclick}>
              <button className="rate-box">
                <img src={editicon} alt="edit-rate-icon" />
                {item.edit}
              </button>
            </div>
            {modalShow && <Vast_to_Vast_Popup closeModal={setModalShow} />}
          </div>
        );
      })}
    </div>
  );
};

export default Vast_to_Bank;