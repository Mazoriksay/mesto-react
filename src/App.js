import headerLogo from './images/logo/header__logo.svg'
import './index.css';

function App() {
  return (
    <div className="body">
          <div className="page">
              <header className="header">
                  <a href="#"><img src={headerLogo} className="header__logo" alt="Логотип Место"/></a>
              </header>
              <main className="content">
                  <section className="profile">
                    <img src="#" className="profile__avatar" alt="Аватар"/>
                    <button className="profile__avatar-button"></button>
                      <div className="profile__info">
                          <h1 className="profile__name"></h1>
                          <button className="profile__edit" type="button"></button>
                          <h2 className="profile__about"></h2>
                      </div>
                      <button className="profile__add" type="button"></button>
                  </section>
                  <section className="gallery">
                      <ul className="list">
                      </ul>
                  </section>
              </main>
              <footer className="footer">
                  <p className="footer__copyright">© 2023 Mesto Russia</p>
              </footer>
              <div className="popup" id="popup-edit">
                  <div className="popup__form-container">
                      <button className="popup__button-close" type="button"></button>
                      <h2 className="popup__text">Редактировать профиль</h2>
                      <form className="popup__form" method="get" name="profile-form" id="profile-form" novalidate onkeypress="return event.keyCode != 13;">
                          <label className="popup__field"> 
                              <input id="name-input" className="popup__input" type="text" name="name" placeholder="Ваше имя" required="true" minlength="2" maxlength="40" />
                              <span className="popup__input-error name-input-error"></span>
                          </label>
                          <label className="popup__field">
                              <input id="about-input" className="popup__input" type="text" name="about" placeholder="Чем вы занимаетесь" required="true" minlength="2" maxlength="200" />
                              <span className="popup__input-error about-input-error"></span>
                          </label>
                          <input className="popup__button-save" id="profile-btn" type="submit" value="Сохранить" />
                      </form>
                  </div>
              </div>
              <div className="popup" id="popup-card">
                  <div className="popup__form-container">
                      <button className="popup__button-close" type="button"></button>
                      <h2 className="popup__text">Новое Место</h2>
                      <form className="popup__form" method="get" name="card-form" id="card-form" novalidate onkeypress="return event.keyCode != 13;">
                          <label className="popup__field">
                              <input id="place-input" className="popup__input" type="text" name="name" placeholder="Название" required="true" minlength="2" maxlength="30" />
                              <span className="popup__input-error place-input-error"></span>
                          </label>
                          <label className="popup__field">
                              <input id="link-input-img" className="popup__input" type="url" name="link" placeholder="Ссылка на картинку" required="true" minlength="1" />
                              <span className="popup__input-error link-input-img-error"></span>
                          </label>
                          <input className="popup__button-save" id="card-btn" type="submit" value="Создать" /> 
                      </form>
                  </div>
              </div>
              <div className="popup photo">
                <div className="popup__photo-container">
                      <button className="popup__button-close" type="button"></button>
                      <img className="popup__image" src="#" alt="." />
                      <p className="popup__photo-text"></p>
                </div>
              </div>
              <div className="popup" id="popup-delete">
                  <div className="popup__form-container popup-delete">
                      <button className="popup__button-close" type="button"></button>
                      <h2 className="popup__text">Вы уверены?</h2>
                      <form className="popup__form" name="delete-form" id="delete-form" novalidate onkeypress="return event.keyCode != 13;">
                          <input className="popup__button-save" id="delete-btn" type="submit" value="Да" /> 
                      </form>
                  </div>
              </div>
              <div className="popup" id="popup-avatar">
                  <div className="popup__form-container popup-avatar">
                      <button className="popup__button-close" type="button"></button>
                      <h2 className="popup__text">Обновить Аватар</h2>
                      <form className="popup__form" method="get" name="avatar-form" id="avatar-form" novalidate onkeypress="return event.keyCode != 13;">
                          <label className="popup__field">
                              <input id="link-input-avatar" className="popup__input" type="url" name="avatar" placeholder="Ссылка на картинку" required="true" minlength="1" />
                              <span className="popup__input-error link-input-avatar-error"></span>
                          </label>
                          <input className="popup__button-save" id="avatar-btn" type="submit" value="Сохранить" /> 
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
