import React from "react";
import "./style/TodoList.css";

const TodoList = (props) => {
  const { Data } = props;
  return (
    <div className="todo-list">
      {/* ============================================================================== */}
      {/* If length of the variable "Data" is 0, display No task, other wise map through the Data. */}
      {/* ============================================================================== */}
      {Data.length === 0 && (
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "normal",
            textAlign: "center",
          }}
        >
          No Task
        </h1>
      )}
      {Data.map((item, id) => {
        return (
          <div key={id} className={item.complete ? "card itsClicked" : "card"}>
            <div className="left-side">
              <button
                onClick={() => {
                  props.onUpdate(item._id, !item.complete);
                }}
                className="choose"
              ></button>
              <h3>{item.text}</h3>
            </div>
            <button onClick={() => props.onRemove(item._id)}>X</button>
          </div>
        );
      })}
      {/* ============================== */}
    </div>
  );
};

export default TodoList;
