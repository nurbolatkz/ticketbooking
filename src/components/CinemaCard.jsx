import React from 'react';

const CinemaCard = (props) => {
    return (
        <div className='card'>
            <div className='card-item'>
                <img src={props.cinema_card.img_src} alt="" className='card-img'/>
                <h5 className='card_title'>{props.cinema_card.address}</h5>
                <button>Выбрать</button>

            </div>
        </div>

    );
};

export default CinemaCard;