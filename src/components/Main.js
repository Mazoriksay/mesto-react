import {useState, useEffect} from 'react';
import '../index.css'
import {api} from '../utils/Api.js'
import Card from './Card';


function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, onTrashClick}) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(res => {
            setUserName(res[0].name);
            setUserDescription(res[0].about)
            setUserAvatar(res[0].avatar);
            setCards(...cards, res[1])
        })
        .catch((err) => console.log(err));
    }, [])
    
    return (
        <main className="content">
            <section className="profile">
                <img src={userAvatar} className="profile__avatar" alt="Аватар"/>
                <button className="profile__avatar-button" onClick={onEditAvatar}></button>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit" type="button" onClick={onEditProfile}></button>
                    <h2 className="profile__about">{userDescription}</h2>
                </div>
                <button className="profile__add" type="button" onClick={onAddPlace}></button>
            </section>
            <section className="gallery">
                <ul className="list">
                    {cards.map(({name, link, likes}) => (
                        <Card
                            name={name}
                            link={link}
                            likes={likes}
                            onCardClick={onCardClick}
                            onTrashClick={onTrashClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    )
}


export default Main;