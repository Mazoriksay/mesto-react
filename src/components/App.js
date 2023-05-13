import {useState} from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null)
    
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }
    
    const handleDeletePlaceClick = () => {
        setIsDeletePlacePopupOpen(true);
    }

    const handleCloseAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsDeletePlacePopupOpen(false);
        setSelectedCard(null);
    }

    const handleCardClick = (item) => {
        setSelectedCard(item);
    }
 

    return (
    <div className="body">
        <div className="page">
            <Header />
            <Main 
                onEditProfile={handleEditProfileClick}
                onEditAvatar={handleEditAvatarClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                onTrashClick={handleDeletePlaceClick}
            />
            <Footer />
            <PopupWithForm
                name="profile"
                title="Редактировать профиль"
                btnValue="Cохранить"
                isOpen={isEditProfilePopupOpen}
                onClose={handleCloseAllPopups}
            >
                <>
                    <label className="popup__field"> 
                        <input id="name-input" className="popup__input" type="text" name="name" placeholder="Ваше имя" required={true} minLength="2" maxLength="40" />
                        <span className="popup__input-error name-input-error"></span>
                    </label>
                    <label className="popup__field">
                        <input id="about-input" className="popup__input" type="text" name="about" placeholder="Чем вы занимаетесь" required={true} minLength="2" maxLength="200" />
                        <span className="popup__input-error about-input-error"></span>
                    </label>
                </>
            </PopupWithForm>
            <PopupWithForm
                name="avatar"
                title="Обновить Аватар"
                isOpen={isEditAvatarPopupOpen}
                onClose={handleCloseAllPopups}
                btnValue="Сохранить"
            >
                <>
                    <label className="popup__field">
                        <input id="link-input-avatar" className="popup__input" type="url" name="avatar" placeholder="Ссылка на картинку" required={true} minLength="1" />
                        <span className="popup__input-error link-input-avatar-error"></span>
                    </label>   
                </>
            </PopupWithForm>
            <PopupWithForm
                name="card"
                title="Новое Место"
                isOpen={isAddPlacePopupOpen}
                onClose={handleCloseAllPopups}
                btnValue="Создать"
            >
                 <>
                    <label className="popup__field">
                        <input id="place-input" className="popup__input" type="text" name="name" placeholder="Название" required={true} minLength="2" maxLength="30" />
                        <span className="popup__input-error place-input-error"></span>
                    </label>
                    <label className="popup__field">
                        <input id="link-input-img" className="popup__input" type="url" name="link" placeholder="Ссылка на картинку" required={true} minLength="1" />
                        <span className="popup__input-error link-input-img-error"></span>
                    </label>
                </>
            </PopupWithForm>
            <PopupWithForm
                name="delete"
                title="Вы уверены?"
                isOpen={isDeletePlacePopupOpen}
                onClose={handleCloseAllPopups}
                btnValue="Удалить"
            />
            
            <ImagePopup
                image={selectedCard}
                onClose={handleCloseAllPopups}
            /> 
             
        </div>
    </div>
    );
}

export default App;
