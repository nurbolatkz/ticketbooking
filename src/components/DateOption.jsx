import React from 'react';

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
                    <h5>Сегодня в кино</h5>
                </div>
                <div className='date-block' id='tomorrow'  onClick={()=>selectDate('tomorrow')}>
                    <h5>На завтра</h5>
                </div>
            </div>
        </div>

    )
}

export default DateOption;