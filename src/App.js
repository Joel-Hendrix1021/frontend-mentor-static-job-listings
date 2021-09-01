
import Dbdata from "./data.json"
import './App.css';
import Header from './components/Header';
import { Table } from "./components/Table";
import { useEffect, useState } from "react";
import ContainerFilter from "./components/ContainerFilter/ContainerFilter";

function App() {
  const [data, setData] = useState(Dbdata)
  const [itemFilter, setItemFilter] = useState([])
  const [skills, setSkills]=useState([])


  useEffect(() => {
     funcArraySkills()
     filterLenguajes()   
  }, [itemFilter])

  const handleSelectFilter=(query)=>{
   if(itemFilter.some(item=> item === query)) return itemFilter
   setItemFilter([
      ...itemFilter,query
    ])
  }

  const funcArraySkills =()=>{
    let skillsArray = data.map(item=>{
      const {languages, tools, level, role, id} = item
       let aux = [ ...languages, level, role]
    
       if(tools.length> 0) aux = [...tools, ...aux]
      return {
        id,
        skills:aux
      }
   })
   setSkills(skillsArray)
  }

  const filterLenguajes=()=>{
       let aux = []
       console.log(skills)
       skills.map(el => console.log(el.skills.includes("HTML")))
       aux =  itemFilter.map(item=> console.log(item))
        
  } 
 
  return (
    <div className="App">
      <Header/>
        <ContainerFilter itemFilter={itemFilter}/>
       <Table handleSelectFilter={handleSelectFilter} data={data}/>
    </div>
  );
}

export default App;
