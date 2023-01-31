import React from 'react';

const CinemaCard = (props) => {
    return (
        <div class="column">
            <div class="card">
                <img src={props.cinema_card.img_src} alt="cinema name"/>
                <div class="card-body">
                  <h5>{props.cinema_card.address}</h5>
                  <button type="button" name="button">Выбрать</button>
                </div>
            </div>
        </div>

    );
};

export default CinemaCard;
