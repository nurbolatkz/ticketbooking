import React, {useState} from 'react';

const SnackItem = (props) => {

    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(quantity + 1);

    };
    const handleDecrement = () => {
        setQuantity(quantity - 1);
    };


    return (

            <div className='snack-card' id={props.id}>
                <span className={`${quantity >=1 ? "snack-card-counter" : "hide-element"}`} >
                    {quantity}
                </span>
                <div className={'img-container'}>
                     <img src={props.snack_card.img_src} alt=""/>
                </div>

                <div className='snack-card-body'>
                    <h4 className="snack-card-title">
                        {props.snack_card.snack_name}  <span className="snack-card-price">{props.snack_card.price} тг</span>
                    </h4>

                    <button  className={`${quantity <=0 ? "select-btn" : "hide-element"}`} onClick={handleIncrement} >Выбрать</button>

                    <div className='btn-container'>
                            <button
                                id='increment_btn' onClick={handleIncrement}
                                className={`${quantity >=1 ? "change_quantity" : "hide-element"}`}
                            >+</button>
                            <button
                                id='decrement_btn'
                                onClick={handleDecrement}
                                className={`${quantity >=1 ? "change_quantity" : "hide-element"}`}
                            >-</button>
                    </div>
                </div>
            </div>

    )
}

export default  SnackItem;