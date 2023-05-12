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

    const handleCloseAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
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
            />
            <Footer />
            <PopupWithForm
                name="profile"
                title="Редактировать профиль"
                btnValue="Cохранить"
                isOpen={isEditProfilePopupOpen}
                onClose={handleCloseAllPopups}
                children={
                    <>
                        <label className="popup__field"> 
                            <input id="name-input" className="popup__input" type="text" name="name" placeholder="Ваше имя" required="true" minlength="2" maxlength="40" />
                            <span className="popup__input-error name-input-error"></span>
                        </label>
                        <label className="popup__field">
                            <input id="about-input" className="popup__input" type="text" name="about" placeholder="Чем вы занимаетесь" required="true" minlength="2" maxlength="200" />
                            <span className="popup__input-error about-input-error"></span>
                        </label>
                     </>
                }
            />
            <PopupWithForm
                name="avatar"
                title="Обновить Аватар"
                isOpen={isEditAvatarPopupOpen}
                onClose={handleCloseAllPopups}
                btnValue="Сохранить"
                children={
                    <>
                        <label className="popup__field">
                            <input id="link-input-avatar" className="popup__input" type="url" name="avatar" placeholder="Ссылка на картинку" required="true" minlength="1" />
                            <span className="popup__input-error link-input-avatar-error"></span>
                        </label>   
                    </>
                }
            />
            <PopupWithForm
                name="card"
                title="Новое Место"
                isOpen={isAddPlacePopupOpen}
                onClose={handleCloseAllPopups}
                btnValue="Создать"
                children={
                    <>
                        <label className="popup__field">
                            <input id="place-input" className="popup__input" type="text" name="name" placeholder="Название" required="true" minlength="2" maxlength="30" />
                            <span className="popup__input-error place-input-error"></span>
                        </label>
                        <label className="popup__field">
                            <input id="link-input-img" className="popup__input" type="url" name="link" placeholder="Ссылка на картинку" required="true" minlength="1" />
                            <span className="popup__input-error link-input-img-error"></span>
                        </label>
                    </>
                }
            />
            <ImagePopup
                image={selectedCard}
                onClose={handleCloseAllPopups}
            />
              
            
              <div className="popup" id="popup-delete">
                  <div className="popup__form-container popup-delete">
                      <button className="popup__button-close" type="button"></button>
                      <h2 className="popup__text">Вы уверены?</h2>
                      <form className="popup__form" name="delete-form" id="delete-form" novalidate onkeypress="return event.keyCode != 13;">
                          <input className="popup__button-save" id="delete-btn" type="submit" value="Да" /> 
                      </form>
                  </div>
              </div>
          </div>
          <template id="card-template">
                  <li className="list__card">
                      <button className="list__remove" type="button"></button>
                      <button className="list__button-image" type="button"><img className="list__image" src="#" alt="." /></button>
                      <div className="list__container">
                          <h2 className="list__text"></h2>
                          <div className="list__like-container">
                              <button className="list__like" type="button"></button>
                              <p className="list__like-count">0</p>
                          </div>
                      </div>
                  </li>
          </template>
    </div>
    );
}

export default App;
