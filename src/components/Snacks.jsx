import React from 'react';

const Snacks = (snack_cards) => {
    const arrangedByRow = () => {
        let arranged_snack_cards = [];
        return arranged_snack_cards
    }
    const snackMenuArrangedByRow =  arrangeByRow();
    return (
        <div>
            {snackMenuArrangedByRow.map(snack) =>{
                <SnackItem snac_card={snack}/>
                }
            )}
        </div>

    )
}