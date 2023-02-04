import React from 'react';
import CinemaInfo from './CinemaInfo';
import FilmCardList from "./FilmCardList";


const SnackPage = ({props}) => {
    return (
        <div className='selectedBody'>
            <div className='selected'>
                <span>KINO 1</span>
                <span>-</span>
                <span>Вавилон</span>
                <span>-</span>
                <span>01.02.2023</span>
                <span>-</span>
                <span>20:30</span>
                <span>-</span>
                <span>Русс</span>
                <span>-</span>
                <span>Зал 5</span>
            </div>
        </div>
    )
}

export default SnackPage;