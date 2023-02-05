import React from 'react';

const FilmTimes = ({filmTime, film_card, setSelectedOption}) =>{

    function setShowShortInfo(event) {
        const filmTimeBtn = event.target;
        const filmtTimeContainer = filmTimeBtn.parentNode.parentNode;

        let currentActiveBtn = filmtTimeContainer.getElementsByClassName("active-time-btn");
        if (currentActiveBtn.length > 0) {
            currentActiveBtn[0].className = "timebutton";
            filmTimeBtn.classList.add("active-time-btn");
        }else{
            filmTimeBtn.classList.add("active-time-btn");
        }

        film_card.selectedTime = filmTimeBtn.innerHTML;
        let selectedTimeBtn = document.getElementById('selected-movie-time')
        selectedTimeBtn.innerHTML = filmTimeBtn.innerHTML;
        setSelectedOption(film_card);

    }

    return (
        <div className='Time'>
            <button className='timebutton' onClick={setShowShortInfo}>{filmTime}</button>
        </div>
    )
}

const CinemaInfo = (props) => {

    const filmTimesElements = [];

    for(let i = 0; i < props.film_card.times.length; i++){
        filmTimesElements.push(<FilmTimes key={i} 
                                        filmTime={props.film_card.times[i]} 
                                        film_card={props.film_card}
                                        setSelectedOption={props.setMovieItem}
                                        />);
    }


    return (
            <div class="film-card">
                <div class="film-card-body">
                    <div className='film-info'>
                        <h5 className='film-name'>{props.film_card.film_name}</h5>
                        <div className='oneline'>
                        <span className='lang'>Язык: {props.film_card.lang} </span>
                        <span className='age-access'>с {props.film_card.ageaccess} лет </span>
                        </div>
                        <hr className='line'></hr>
                    </div>
                    <div className='film-times'>
                        {
                            filmTimesElements

                        }
                    </div>
                </div>
            </div>


    );
};

export default CinemaInfo;
