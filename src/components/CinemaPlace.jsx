import React from 'react';


const PlaceElement = (props) =>{
    function handleClick(e){

        const rowspan =  document.getElementById('placeRowId');
        const colspan =  document.getElementById('placeColId');
        const priceForAdult =  document.getElementById('priceOfPlaceForAdult');
        const priceForStudent =  document.getElementById('priceOfPlaceForStudent');
        let placeInfo = {
            rowId: props.details.row,
            colId: props.columnId,
            price: props.details.placePrice
        }


        rowspan.innerHTML = props.details.row + '  ';
        colspan.innerHTML = '  ' +  props.columnId + '  ';
        priceForStudent.innerHTML = props.details.placePrice;
        priceForAdult.innerHTML = props.details.placePrice + 800;

        props.setPlaceInfo(placeInfo);


    }
    return(
        <div className="place" onClick={()=>handleClick()}>
        </div>
    )
}

const PlaceContainer = (props) =>{

    const placeElements = [];
    for(let i = 0; i < props.numberPlaces; i++){
        
        placeElements.push(<PlaceElement details = {props} columnId={i+1}></PlaceElement>)
    }
    return(
            <div className="placeContainer">
                    {placeElements}
            </div>
    )
}

const CinemaPlace = (props) =>{
    const places = [
        {
            id: 1, 
            rowOrder: 1,
            placesInRow: 13,
            price: 1000,
        },
        {
            id: 2, 
            rowOrder: 2,
            placesInRow: 13,
            price: 1000,
        },
        {
            id: 3, 
            rowOrder: 3,
            placesInRow: 13,
            price: 2000,
        },
        {
            id: 4, 
            rowOrder: 4,
            placesInRow: 13,
            price: 2000,
        },
        {
            id: 5, 
            rowOrder: 5,
            placesInRow: 13,
            price: 2000,
        },
        {
            id: 6, 
            rowOrder: 6,
            placesInRow: 13,
            price: 3000,
        },
        {
            id: 7, 
            rowOrder: 7,
            placesInRow: 13,
            price: 3000,
        },
        {
            id: 8, 
            rowOrder: 8,
            placesInRow: 15,
            price: 3000,
        }
    ] 
    return (
        <><div className="placeTitle">
            <span>Выберите место</span>
        </div>
        <div className="screen"></div>
        <div className="cinemaRoom">
                {<>
                    <div className="rowNums">
                        {places.map((place) => <div>
                            <span>
                                {place.rowOrder}
                            </span>
                        </div>
                        )}</div>
                    <div className="allPlaceContainer">
                        {places.map((place) =>
                            <PlaceContainer
                                    numberPlaces={place.placesInRow}
                                    placePrice={place.price}
                                    row={place.rowOrder}
                                    setPlaceInfo={props.setDetailOfPlace}>

                            </PlaceContainer>

                        )}</div></>}
            </div></>
    )
}

export default CinemaPlace;