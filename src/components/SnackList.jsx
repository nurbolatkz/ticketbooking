import React from 'react';
import SnackItem from "./SnackItem.jsx";


const SnackList = ({snack_cards}) => {
    const arrangeByRow = () => {

        let arranged_snack_cards = [];
        let counter = 0;
        let row = [];
        for(let i = 0; i < snack_cards.length; i++){

            if(counter === 3 ){
                arranged_snack_cards.push(row);
                counter = 0;
                row = [];
            };
            row.push(snack_cards[i]);
            if(i === snack_cards.length - 1){
                arranged_snack_cards.push(row);
            }
            counter++;

        }
        return arranged_snack_cards;
    }

    const snackMenuArrangedByRow =  arrangeByRow();

    return (
        <div className='snack-container'>
            {snackMenuArrangedByRow.map((row) =>
                <div className = 'row'>
                    <SnackItem snack_card={row[0]}/>

                    {row[1] &&
                        <SnackItem snack_card={row[1]}/>
                    }

                    {row[2] &&
                        <SnackItem snack_card={row[2]}/>
                    }
                </div>
            )}
        </div>

    )
}

export default  SnackList;