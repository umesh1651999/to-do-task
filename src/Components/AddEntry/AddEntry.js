import React from "react";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";

import "./AddEntry.css";

export const AddEntry = ({ removeAddComponent, addNewEntry, get }) => {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("");
  const { addToast } = useToasts();

  const printStates = () => {
    addNewEntry(title, todo, priority);
  };
  return (
    <section className="wrapper">
      <div className="removeIcon" onClick={() => removeAddComponent()}>
        <span className="glyphicon glyphicon-remove"></span>
      </div>
      <section className="addEntry">
        <section className="input">
          <label>Title</label>
          <div className="titleContainer">
            <input
              type="text"
              className="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </section>
        <section className="input">
          <div>
            <label>Enter TODO</label>
          </div>
          <div className="todoContainer">
            <input
              type="text"
              className="todo"
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
        </section>
        <section className="input">
          <div>
            <label>Priority</label>
          </div>
          <div className="radioContainer">
            <label className="radio-inline">
              <input
                type="radio"
                name="option"
                onChange={(e) => setPriority("LOW")}
              />
              LOW
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="option"
                onChange={(e) => setPriority("HIGH")}
              />
              HIGH
            </label>
          </div>
        </section>
      </section>
      <section className="btnWrapper">
        <button className="addBtn" onClick={printStates}>
          ADD
        </button>
      </section>
    </section>
  );
};
