import React, {useState} from 'react';

const SnackItem = (props) => {
    const [quantity, setQuantity] = useState(0);

    return (
            <div className='snack-card'>
                <span className='counter'>{quantity}</span>
                <img src={props.snack_card.img_src} alt=""/>
                <div className='snack-card-body'>
                    <div className='snack-card-title'>
                        <h5>{props.snack_card.snack_name}</h5>
                </div>
                    <button>Выбрать</button>
            </div>
        </div>

    )
}

export default  SnackItem;