import React from "react";

function Card({card, onCardClick, onTrashClick}) {
    const handleCardClick = () => {
        onCardClick(card)
    }
    
    return (
    <li className="list__card">
        <button className="list__remove" type="button" onClick={onTrashClick}></button>
        <button className="list__button-image" type="button" onClick={handleCardClick}><img className="list__image" src={card.link} alt={card.name}/></button>
        <div className="list__container">
            <h2 className="list__text">{card.name}</h2>
            <div className="list__like-container">
                <button className="list__like" type="button"></button>
                <p className="list__like-count">{card.likes.length}</p>
            </div>
        </div>
    </li> 
    )
}

export default Card;