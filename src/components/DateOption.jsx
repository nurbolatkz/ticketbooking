import React from 'react';

const DateOption = () => {
    return (
        <div className='suggest-date-block'>
            <h4 className='suggest-title'> ВЫБОР ДАТЫ</h4>
            <div>
                <div className='date-block' id='today'>
                    <h5>Сегодня в кино</h5>
                </div>
                <div className='date-block' id='tomorrow'>
                    <h5>На завтра</h5>
                </div>
            </div>
        </div>

    )
}

export default DateOption;