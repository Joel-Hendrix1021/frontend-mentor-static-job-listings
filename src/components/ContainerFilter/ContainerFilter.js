import React from 'react'
import './styles.css'

export default function ContainerFilter({itemFilter, removeFilter, clearRemove}) {
  
    return (
        <div className="container__filter">
            {
                itemFilter.map(item=>{
                    return(
                        <div className="item__filter" key={item}>
                           <p>{item}</p>
                           <span className="btn__remove" onClick={(e)=>removeFilter(item)}>
                              <img  src="./images/icon-remove.svg" alt="remove" />
                          </span>
                         
                        </div>  
                    )
                })
            }
             <p onClick={()=>clearRemove()} className="filter__clear">Clear</p>
        </div>
    )
}
