import React, { useEffect } from "react";

// Modal component for sharing access
const Modal = ({ setModalOpen, contract }) => {

  // Function to handle sharing access
  const sharing = async () => {

    // Get the address from the input field
    const address = document.querySelector(".address").value;
    // Call the contract's allow function to share access
    await contract.allow(address);
    // Close the modal
    setModalOpen(false);
  };

  // useEffect to fetch and display shared access list
  useEffect(() => {

    // Function to fetch and display shared access list
    const accessList = async () => {

      // Call the contract's shareAccess function to get the list of addresses with access
      const addressList = await contract.shareAccess();
      // Get the select element
      let select = document.querySelector("#selectNumber");
      const options = addressList;

      // Populate the select element with options
      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let e1 = document.createElement("option");
        e1.textContent = opt;
        e1.value = opt;
        select.appendChild(e1);
      }
    };

    // Call the accessList function if the contract is available
    contract && accessList();
  }, [contract]);

  return (
    <>
      <div className="modalBg">
        <p>Share:</p>
        <div className="modal-body">
          <div className="modal-head">

            {/* Input field for entering address */}
            <input type="text" className="address" placeholder="Enter Address" />

            {/* Select element to display shared access list */}
            <form id="myForm">
              <select id="selectNumber">
                <option className="address">People With Access</option>
              </select>
            </form>
          </div>
          <div className="modal-footer">

            {/* Button to trigger sharing */}
            <button onClick={() => sharing()}>Share</button>

            {/* Button to cancel and close the modal */}
            <button onClick={() => { setModalOpen(false); }} id="cancelBtn" >Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;