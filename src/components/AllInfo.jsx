import React from 'react';

const AllInfo = ({props}) => {
    return (
        <div className='cinemaPlaceBody'>
            <div className='selectedElements'>
                <div className='leftSide'>
                    <span>5 ряд 10 место</span><br></br>
                    <span>Взрослый</span>
                </div>
                <div className='rightSide'>
                    <span >2000тг</span>
                </div>
            </div>
        </div>
    )
}

export default AllInfo;