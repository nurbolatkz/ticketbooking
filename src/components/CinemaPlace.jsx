import React from 'react';


const PlaceElement = (props) =>{
    console.log("test "+props.detail.placePrice)
    return(
        <div className="place">
        </div>
    )
}

const PlaceContainer = (props) =>{
    
    console.log(props);
    const placeElements = [];
    for(let i = 0; i < props.numberPlaces; i++){
        
        placeElements.push(<PlaceElement detail = {props}></PlaceElement>)
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
                        {places.map((place) => <PlaceContainer numberPlaces={place.placesInRow} placePrice={place.price} row={place.rowOrder}></PlaceContainer>

                        )}</div></>}
            </div></>
    )
}

export default CinemaPlace;