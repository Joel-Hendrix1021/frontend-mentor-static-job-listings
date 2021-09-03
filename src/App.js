
import Dbdata from "./data.json"
import './App.css';
import Header from './components/Header';
import { Table } from "./components/Table";
import { useEffect, useState } from "react";
import ContainerFilter from "./components/ContainerFilter/ContainerFilter";

function App() {
  const [data, setData] = useState(Dbdata)
  const [itemFilter, setItemFilter] = useState([])
 // const [statusFilter, setStatusFilter] =useState(false)


  useEffect(() => {
      filterLenguajes()
  }, [itemFilter])

  const handleSelectFilter=(query)=>{
    
   if(itemFilter.some(item=> item === query)) return itemFilter
   setItemFilter([
      ...itemFilter,query
    ])
    setData(Dbdata)
  }

//filtrar 
  const filterLenguajes=()=>{
       //console.log(itemFilter)
       let  auxArray = []
       if(itemFilter.length > 0){
         for (let i = 0; i < data.length; i++) {
           //filter lenguages
           //itemFilter.map(item=> (data[i].languages.includes(item))? auxArray.push(data[i]) : null)   
           itemFilter.forEach(item=> {
             //lenguages
             if(data[i].languages.includes(item)){
               if(!auxArray.includes(data[i])){
                auxArray.push(data[i])
               }
               //tools
             }else if(data[i].tools.includes(item)){
              if(!auxArray.includes(data[i])){
                auxArray.push(data[i])
               }
             }else if(data[i].role.includes(item)){
              if(!auxArray.includes(data[i])){
                auxArray.push(data[i])
               }
             }else if(data[i].level.includes(item)){
              if(!auxArray.includes(data[i])){
                auxArray.push(data[i])
               }
             }
           })
           
         }
         console.log(auxArray)
         setData(auxArray)
        //setData(data.filter(el=> el.languages.includes())) 
    }      
} 

const removeFilter=(n)=>{
  setItemFilter(itemFilter.filter(item=> item !==n))
  //console.log(n)
  setData(Dbdata)
}
 
  return (
    <div className="App">
      <Header/>
        <ContainerFilter removeFilter={removeFilter} itemFilter={itemFilter}/>
       <Table handleSelectFilter={handleSelectFilter} data={data}/>
    </div>
  );
}

export default App;
