import React, { useEffect, useState } from "react";
import Dbdata from "./data.json";
import "./App.css";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
import ContainerFilter from "./components/ContainerFilter/ContainerFilter";

function App() {
  const [data, setData] = useState(Dbdata);
  const [itemFilter, setItemFilter] = useState([]);

  useEffect(() => {
    setData(Dbdata);
  }, [itemFilter]);

  const filterSkills = ({ languages, level, role, tools }) => {
    if (itemFilter.length === 0) {
      return true;
    }
    const skillsArra = [...languages, level];
    if (role) skillsArra.push(role);
    if (tools) skillsArra.push(...tools);
    return skillsArra.some((f) => itemFilter.includes(f));
  };

  // eslint-disable-next-line consistent-return
  const handleSelectFilter = (query) => {
    if (itemFilter.some((item) => item === query)) return itemFilter;
    setItemFilter([...itemFilter, query]);
  };

  const removeFilter = (n) => {
    setItemFilter(itemFilter.filter((item) => item !== n));
  };

  const clearRemove = () => {
    setItemFilter([]);
  };

  // filtra basado en filterskills si es true devuelve el array
  const listSkills = data.filter((fil) => filterSkills(fil));

  return (
    <div className="App">
      <Header />
      {itemFilter.length > 0 && (
        <ContainerFilter
          removeFilter={removeFilter}
          itemFilter={itemFilter}
          clearRemove={clearRemove}
        />
      )}

      <Table handleSelectFilter={handleSelectFilter} data={listSkills} />
    </div>
  );
}

export default App;
