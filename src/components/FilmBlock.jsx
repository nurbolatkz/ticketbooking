import React from 'react';

const FilmBlock = ({props}) => {
    return(
        <div className='filmBlockBody'>
            <div className='filmInfoBody'>
                <img className='filmImage' src='/imgs/babylon.jpg'></img>
                   <div className='filmInfoBlockOne'>
                        <span className='filmName'>Вавилон</span><br></br>
                        <span className='filmLang'>Язык: Русский</span>
                   </div>
                   <div className='filmInfoBlockTwo'>
                        <span className='filmTime'>20:30</span><br></br>
                        <span className='filmAgeAccess'>Возрастной рейтинг: с 16 лет</span>
                   </div>
            </div>
        </div>
    )
}


export default FilmBlock;