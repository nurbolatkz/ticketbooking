import React, {useState} from 'react';

const SnackItem = (props) => {
    const [quantity, setQuantity] = useState(0);

    return (
        <div className='snack-card'>
            <span className='counter'>{quantity}</span>
            <img src={props.snack_card.img-src} alt=""/>
            <div className='snack-card-body'>
                <div className='snack-card-title'>
                    <h5>props.snack_card.title</h5>
                    <button>Выбрать</button>
                </div>
            </div>
            
        </div>

    )
}