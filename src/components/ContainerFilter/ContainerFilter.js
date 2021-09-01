import React from 'react'
import './styles.css'

export default function ContainerFilter({itemFilter}) {
    return (
        <div className="container__filter">
            {
                itemFilter.map(item=>{
                    return(
                        <div className="item__filter" key={item}>
                             <p>{item}</p>
                             <span>x</span>
                        </div>  
                    )
                })
            }
        </div>
    )
}
