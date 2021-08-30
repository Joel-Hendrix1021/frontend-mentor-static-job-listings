
import Dbdata from "./data.json"
import './App.css';
import Header from './components/Header';
import { Table } from "./components/Table";
import { useState } from "react";

function App() {
  const [data, setData] = useState(Dbdata)
  return (
    <div className="App">
      <Header/>
       <Table data={data}/>
    </div>
  );
}

export default App;
