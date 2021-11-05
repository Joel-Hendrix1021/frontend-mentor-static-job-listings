import React from "react";
import RowsItem from "../RowsItem/RowsItem";
import "./table.css";

const Table = ({ data, handleSelectFilter }) => {
  return (
    <div className="container__table">
      <RowsItem handleSelectFilter={handleSelectFilter} data={data} />
    </div>
  );
};

export default Table;
