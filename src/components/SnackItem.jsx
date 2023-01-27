import React, {useState} from 'react';

const SnackItem = (props) => {

    const [quantity, setQuantity] = useState(1)


    return (
            <div className='snack-card' id={props.id}>
                <span className='counter'>{props.snack_card.quantity}</span>

                <img src={props.snack_card.img_src} alt=""/>
                <div className='snack-card-body'>
                    <div className='snack-card-title'>
                        <h5>{props.snack_card.snack_name}</h5>
                </div>
                    <button className= 'select-btn' onClick={() => props.setVisibility(props.id)}>Выбрать</button>

                    <div className='btn-container'>
                        <button id='decrement_btn' onClick={() => props.decrement(props.snack_card)}>-</button>
                        <button id='increment_btn' onClick={() => props.increment(props.snack_card)} >+</button>
                    </div>


            </div>
        </div>

    )
}

export default  SnackItem;