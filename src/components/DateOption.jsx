import React from 'react';
import {
    Link
} from "react-router-dom";
const DateOption = ({selectDay, setActiveModal}) => {

    function getDateByOption(option) {

        var today = new Date();
        var dd;
        if (option === "today") {
            dd = String(today.getDate()).padStart(2, '0');
        }else{
            dd = String(today.getDate() + 1).padStart(2, '0');
        }
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        return today;
    }
    const selectDate = (day) => {
        let new_day = getDateByOption(day);
        selectDay(new_day);
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