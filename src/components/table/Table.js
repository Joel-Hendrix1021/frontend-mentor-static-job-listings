import React from 'react'
import RowsItem from '../RowsItem/RowsItem'
import './table.css'


export const Table = ({data, handleSelectFilter}) => {
    return (
        <div className="container__table">
            <RowsItem handleSelectFilter={handleSelectFilter} data={data}/>
        </div>
    )
}
