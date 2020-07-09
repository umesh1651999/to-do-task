import React from "react";
import "./AddBtn.css";

export const AddBtn = ({ add }) => {
  return (
    <section className="addButtonContainer">
      <img
        onClick={() => add()}
        alt="Add-Button"
        className="addBtnImg"
        src="https://www.searchpng.com/wp-content/uploads/2019/03/AddButt-butt-200x200.png"
      />
    </section>
  );
};
