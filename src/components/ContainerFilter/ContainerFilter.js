import React from "react";
import "./styles.css";

const ContainerFilter = ({ itemFilter, removeFilter, clearRemove }) => {
  return (
    <div className="container__filter">
      {itemFilter.map((item) => (
        <div className="item__filter" key={item}>
          <p>{item}</p>
          <button
            type="button"
            className="btn__remove"
            onClick={() => removeFilter(item)}
          >
            <img src="./images/icon-remove.svg" alt="remove" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => clearRemove()}
        className="btn__clear"
      >
        Clear
      </button>
    </div>
  );
};

export default ContainerFilter;
