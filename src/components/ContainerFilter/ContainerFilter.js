import React, { useRef } from 'react'
import './styles.css'

export default function ContainerFilter({itemFilter, removeFilter}) {
    const refSkills = useRef(null)

    

    return (
        <div className="container__filter">
            {
                itemFilter.map(item=>{
                    return(
                        <div className="item__filter" key={item}>
                             <p >{item}</p>
                             <button onClick={(e)=>removeFilter(item)}>x</button>
                        </div>  
                    )
                })
            }
        </div>
    )
}
