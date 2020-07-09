import React from "react";
import { Spring } from "react-spring/renderprops";
import "./Tasks.css";

export const Tasks = ({ tasks, removeTask, setSortByValue }) => {
  const setSortBy = (e) => {
    setSortByValue(e);
  };
  return (
    <section className="taskContainer">
      {/* {console.log(typeof tasks)} */}
      {typeof tasks !== typeof " " ? (
        <section className="topLine">
          <section>
            <p className="taskList">TaskList :</p>
          </section>
          <section>
            <select
              name="sortBy"
              className="dropDown"
              onChange={(e) => setSortBy(e)}
            >
              <option value="" selected disabled hidden>
                Sort by:
              </option>
              <option value="priority">Priority</option>
              <option value="date">Date</option>
            </select>
          </section>
        </section>
      ) : (
        ""
      )}
      {typeof tasks !== typeof " " ? (
        tasks.map((task) => (
          <Spring
            from={{ opacity: 0, marginLeft: -100 }}
            to={{ opacity: 1, marginLeft: 0 }}
          >
            {(props) => (
              <div style={props}>
                <section key={task.id}>
                  <section className="taskData">
                    <div>
                      <p className="titleName">{task.title}</p>
                    </div>
                    <div className="priorityContainer">
                      <p className="priority">{task.priority}</p>
                    </div>
                    <div>
                      <div className="removeBtnContainer">
                        <button
                          className="removeButton"
                          onClick={() => removeTask(task.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </section>
                  <section className="priorityInfo">
                    <span>
                      <p className="titleData">{task.data}</p>
                    </span>
                  </section>
                </section>
              </div>
            )}
          </Spring>
        ))
      ) : (
        <p className="noTask">No task at the moment...</p>
      )}
    </section>
  );
};
