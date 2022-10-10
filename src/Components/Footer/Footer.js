import React from 'react'
import CallUsButton from '../CallUsButton/CallUsButton'
// Components
import GPS from '../GPS'
// Styles
import './Footer.css'


function Footer() {
    return (
        <footer id='#contacts'>
            <div className='container'>
                <nav className='contacts'>
                    <h2>Контакты</h2>
                    <div className='contacts-item'>
                        <h3>Телефон</h3>
                        <a href='tel:+998913821334' className='contacts-item_subtitle'>Единый коллцентр : +998 91 382-13-34</a>
                    </div>
                    <div className='contacts-item'>
                        <h3>Адресс</h3>
                        <h4 className='contacts-item_subtitle'>Ташкентская область, Кибрайский район, городской посёлок Салар, улица Гулимамур, 5/1</h4>
                    </div>
                    <div className='contacts-item'>
                        <h3>Соц сети</h3>
                        <h4 className='contacts-item_subtitle'>Подпишитесь</h4>
                    </div>
                    <CallUsButton />
                    <a className='contacts-copyright' href='https://www.instagram.com/lolman_nnnn'> © 2022 Copyright | Создание сайта Lolman</a>
                </nav>
                <GPS />
            </div>
        </footer>
    )
}

export default Footer