import React from 'react';

function ImagePopup({image, onClose}) {
    return(
    <div className={`popup photo popup_type_photo`+ (image ? " popup_opened" : "")}>
        <div className="popup__photo-container">
            <button className="popup__button-close" type="button" onClick={onClose}></button>
            <img className="popup__image" src={image ? image.link : ""} alt={image ? image.name : ""} />
            <p className="popup__photo-text"></p>
        </div>
    </div>
    )
}

export default ImagePopup;