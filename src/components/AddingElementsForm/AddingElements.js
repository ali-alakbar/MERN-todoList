import React from "react";
import "./style/AddingElements.css";
const AddingElements = (props) => {
  return (
    <div className="adding-elements">
      <button onClick={() => props.setState(!props.State)} className="icon">
        +
      </button>
      <div
        style={{
          opacity: props.State ? 1 : 0,
          pointerEvents: props.State ? "painted" : "none",
        }}
        className="input-container"
      >
        <div className="form-content-wrapper">
          <input
            onChange={(e) => {
              props.setGettingFrontendText(e.target.value);
            }}
            required
            id="main-input"
            type="text"
            placeholder="Enter something..."
          />
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
        <button onClick={() => props.setState(false)} className="closeBtn">
          X
        </button>
      </div>
    </div>
  );
};

export default AddingElements;
