import React from 'react';

import SnackList from "./SnackList.jsx";


const SnackPage = ({props}) => {
    return (
        <div>
            <SnackList snack_cards={props.snacks_cards}></SnackList>
        </div>
    )
}

export default SnackPage;