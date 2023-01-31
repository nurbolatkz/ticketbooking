import React from 'react';
import SnackItem from "./SnackItem.jsx";


const SnackList = ({snack_cards,  addItem,  removeItem}) => {
    return (
        <div className='snack-container'>
            {snack_cards.map((card) =>
                <div className = 'snack-row'>
                    <SnackItem id={'snack-card' + card.id} snack_card={card} addItem={addItem} removeItem={removeItem}></SnackItem>
                </div>
            )}
        </div>

    )
}

export default  SnackList;