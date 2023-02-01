import React from 'react';
import {
    Link
} from "react-router-dom";
const DateOption = ({selectDay, setActiveModal}) => {
    const selectDate = (day) => {
        selectDay(day);
        setActiveModal(false);
    }
    return (
        <div className='suggest-date-container'>
            <h4 className='suggest-title'> ВЫБОР ДАТЫ</h4>
            <div>
                <div className='date-block' id='today' onClick={()=>selectDate('today')}>
                    <Link  to={'/cinemas/1/movies'}>
                        <h5>Сегодня в кино</h5>
                    </Link>
                </div>
                <div className='date-block' id='tomorrow'  onClick={()=>selectDate('tomorrow')}>
                    <Link to={'/cinemas/2/movies'}>
                        <h5>На завтра</h5>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default DateOption;