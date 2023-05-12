import React from "react";

function Card({name, link, likes, onCardClick, onTrashClick}) {
    const handleCardClick = () => {
        onCardClick({name, link})
    }
    
    return (
    <li class="list__card">
        <button class="list__remove" type="button" onClick={onTrashClick}></button>
        <button class="list__button-image" type="button" onClick={handleCardClick}><img class="list__image" src={link} alt={name}/></button>
        <div class="list__container">
            <h2 class="list__text">{name}</h2>
            <div class="list__like-container">
                <button class="list__like" type="button"></button>
                <p class="list__like-count">{likes.length}</p>
            </div>
        </div>
    </li> 
    )
}

export default Card;