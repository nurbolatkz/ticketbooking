
import React from 'react';

import SnackList from "./SnackList.jsx";


const SnackPage = (props) => {
    return (
        <div>
            <SnackList  snack_cards={props.snack_cards} 
                        addItem={props.addSnack} 
                        removeItem={props.removeSnack}>
                        
            </SnackList>
        </div>
    )
}

export default SnackPage;