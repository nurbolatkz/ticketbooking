import React from 'react';
import CinemaCard from "./CinemaCard";

const CinemaCardlist = ({cards, setActiveModal, addCinemaCart}) => {

    if (!cards.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Cards не найдены!
            </h1>
        )
    }

    let cardFilterByFourElements = [];
    let counter = 0;
    let row  = [];

    for(let i = 0; i < cards.length; i++){

        if(counter === 4){
            cardFilterByFourElements.push(row);
            counter = 0;
            row = [];
        };
        row.push(cards[i]);

        if(i === cards.length - 1){
            cardFilterByFourElements.push(row);
        }
        counter++;

    }

    return (
        <div className='container'>
        <div class="header-container">
            <h1>Выбор кинотеатра</h1>
        </div>

            {cardFilterByFourElements.map((card) =>
                    <div className = 'row'>
                          <CinemaCard
                              cinema_card ={card[0]}
                              setActive={setActiveModal}
                              addToCart={addCinemaCart}
                          />
                        {card[1] &&
                            <CinemaCard
                                cinema_card ={card[1]}
                                setActive={setActiveModal}
                                addToCart={addCinemaCart}
                            />
                        }
                        {card[2] &&
                            <CinemaCard
                                cinema_card ={card[2]}
                                setActive={setActiveModal}
                                addToCart={addCinemaCart}
                            />
                        }
                        {card[3] &&
                            <CinemaCard
                                cinema_card ={card[3]}
                                setActive={setActiveModal}
                                addToCart={addCinemaCart}
                            />
                        }

                    </div>
            )}
        </div>

    );
};

export default CinemaCardlist;

