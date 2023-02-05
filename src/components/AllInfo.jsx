import React from 'react';

const AllInfo = (props) => {
    return (
        <div className='cinemaPlaceBody'>
            <div className='selectedElements'>
                <div className='leftSide'>
                    <span>{props.place_detail.rowId} ряд {props.place_detail.colId} место</span><br></br>
                    <span>{props.place_detail.type}</span>
                </div>
                <div className='rightSide'>
                    <span >{props.place_detail.price}</span>
                </div>
            </div>
        </div>
    )
}

export default AllInfo;