import React from 'react'
import RowsItem from './RowsItem/RowsItem'


export const Table = ({data}) => {
    return (
        <div className="container__table">
            <RowsItem data={data}/>
        </div>
    )
}
