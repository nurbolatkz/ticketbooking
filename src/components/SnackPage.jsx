import React from 'react';import SnackList from "./SnackList.jsx";import telegram from "../App.js"const SnackPage = (props) => {    if(telegram.MainButton){        telegram.MainButton.text = "Оплатить";        telegram.MainButton.show();        Telegram.WebApp.onEvent('mainButtonClicked', function(){            telegram.sendData(props.data);            //при клике на основную кнопку отправляем данные в строковом виде        });    }    return (        <div>            <div className='snaksTitle'>Снеки</div>            <SnackList  snack_cards={props.snack_cards}                         addItem={props.addSnack}                         removeItem={props.removeSnack}>            </SnackList>        </div>    )}export default SnackPage;