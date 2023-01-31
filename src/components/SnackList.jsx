import React from 'react';
import SnackItem from "./SnackItem.jsx";


const SnackList = ({snack_cards}) => {
    return (
        <div className='snack-container'>
            {snack_cards.map((card) =>
                <div className = 'row'>
                    <SnackItem id={'snack-card' + card.id} snack_card={card}></SnackItem>
                </div>
            )}
        </div>

    )
}

export default  SnackList;