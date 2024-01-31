import React, { useEffect } from "react";

const Modal = ({ setModalOpen, contract }) => {
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
    setModalOpen(false);
  };
  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;

      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let e1 = document.createElement("option");
        e1.textContent = opt;
        e1.value = opt;
        select.appendChild(e1);
      }
    };
    contract && accessList();
  }, [contract]);

  return (
    <>
      <div className="modalBg">
        <p>Share:</p>
        <div className="modal-body">
          <div className="modal-head">
            <input type="text" className="address" placeholder="Enter Address" />
            <form id="myForm">
              <select id="selectNumber">
                <option className="address">People With Access</option>
              </select>
            </form>
          </div>
          <div className="modal-footer">
            <button onClick={() => sharing()}>Share</button>
            <button onClick={() => { setModalOpen(false); }} id="cancelBtn" >Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;