import { useState, useEffect } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {api} from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';



function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    // const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        api.getUserInfo()
        .then(res => {
            setCurrentUser(res);
        })
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        Promise.all([api.getInitialCards()])
        .then(res => {
            setCards(...cards, res[0])
        })
        .catch((err) => console.log(err));
    }, [])

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }
    
    // const handleDeletePlaceClick = () => {
    //     setIsDeletePlacePopupOpen(true);
    // }

    const handleCloseAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        // setIsDeletePlacePopupOpen(false);
        setSelectedCard(null);
    }

    const handleCardClick = (item) => {
        setSelectedCard(item);
    }

    const handleLikeClick = (card) => {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => console.log(err));
    }

    const handleDeleteClick = (card) => {
        api.deleteCard(card._id).then(() => {
            setCards((state) => state.filter((item) => item._id !== card._id));
        })
        .catch((err) => console.log(err));
    }

    const handleUpdateUser = (data) => {
        api.setProfileInfo(data)
        .then((res) => {
            setCurrentUser(res);
            handleCloseAllPopups();
        })
        .catch((err) => console.log(err));
    }

    const handleUpdateAvatar = (data) => {
        api.setAvatar(data)
        .then((res) => {
            setCurrentUser(res);
            handleCloseAllPopups();
        })
        .catch((err) => console.log(err));
    }

    const handlePlaceSubmit = (data) => {
        api.addNewCard(data)
        .then((res) => {
            setCards([res, ...cards]);
            handleCloseAllPopups();
        })
        .catch((err) => console.log(err));
    }
 

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="body">
                <div className="page">
                    <Header />
                    <Main 
                        onEditProfile={handleEditProfileClick}
                        onEditAvatar={handleEditAvatarClick}
                        onAddPlace={handleAddPlaceClick}
                        onCardClick={handleCardClick}
                        onTrashClick={handleDeleteClick}
                        onLikeClick={handleLikeClick}
                        cards={cards}
                    />
                    <Footer />
                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={handleCloseAllPopups} onUpdateUser={handleUpdateUser} />
                    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={handleCloseAllPopups} onUpdateAvatar={handleUpdateAvatar} />
                    <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={handleCloseAllPopups} onAddPlace={handlePlaceSubmit} />
                    {/* <PopupWithForm
                        name="delete"
                        title="Вы уверены?"
                        isOpen={isDeletePlacePopupOpen}
                        onClose={handleCloseAllPopups}
                        btnValue="Удалить"
                    /> */}
                    
                    <ImagePopup
                        card={selectedCard}
                        onClose={handleCloseAllPopups}
                    /> 
                    
                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
