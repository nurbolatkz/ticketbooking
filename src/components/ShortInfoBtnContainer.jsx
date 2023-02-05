import React from 'react';

const ShortInfoBtnContainer = (props) => {
    return (
        <div id='shortInfoBtn'>
            <div className='cinema_film'>
                <h5>{props.cinemaCard.address}</h5>
                <h5 className='film-name'>{props.film_card.film_name}</h5>
            </div>
            <div className='detail-info'>
                <span>{props.selected_day}</span>
                <span className='selected-time'>{props.selected_time}</span>
                <span>{props.film_card.lang}</span>
                <span>Зал 5</span>
            </div>
        </div>
</div>
    )
}