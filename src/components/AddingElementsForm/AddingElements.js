import React from "react";
import "./style/AddingElements.css";
const AddingElements = (props) => {
  return (
    <div className="adding-elements">
      <button onClick={() => props.setState(!props.State)} className="icon">
        +
      </button>
      {/* ============================================================================== */}
      {/* Start The interface that will pop up, including the input field */}
      {/* ============================================================================== */}
      <div
        style={{
          opacity: props.State ? 1 : 0,
          pointerEvents: props.State ? "painted" : "none",
        }}
        className="input-container"
      >
        {/* ============================================================================== */}
        {/* Start the input field and the button "done" */}
        {/* ============================================================================== */}

        <div className="form-content-wrapper">
          {/* ======= The input field ======= */}
          <input
            onChange={(e) => {
              props.setGettingFrontendText(e.target.value);
            }}
            required
            id="main-input"
            type="text"
            placeholder="Enter something..."
          />
          {/* ======== The Button ========= */}
          {/* 
            Don't send anything if the above input field is empty or contain spaces.
          */}
          <button
            onClick={() => {
              const mainInputField = document.querySelector("#main-input");
              if (mainInputField.value.trim().length === 0) {
                alert("Please Fill All The Fields");
              } else {
                mainInputField.value = "";
                props.SendData();
              }
            }}
          >
            Done
          </button>
        </div>
        {/* ============================================================================== */}
        {/* End the input field and the button "done" */}
        {/* ============================================================================== */}

        <button onClick={() => props.setState(false)} className="closeBtn">
          X
        </button>
      </div>
      {/* ============================================================================== */}
      {/* End The interface that will pop up, including the input field */}
      {/* ============================================================================== */}
    </div>
  );
};

export default AddingElements;
