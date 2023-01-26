import React from 'react';

const CinemaCard = (props) => {
    return (
        <div className='card'>
            <div className='card-item'>
                <img src={props.cinema_card.img_src} alt="" className='card-img'/>
                <div className='card-body'>
                    <h5 className='card-title'>{props.cinema_card.address}</h5>
                    <div className='card-footer'>
                        <button>Выбрать</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CinemaCard;