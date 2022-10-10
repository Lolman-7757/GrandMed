import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {

    const windowWidth = window.innerWidth
    

    return (
        <header>
            <Link className='logo' to='/'>
                <img src='https://i.imgur.com/9x6lrzG.jpg' alt='logo' />
            </Link>
            <ul className='header_navs header-none'>
                <li className='header_nav-item'><Link to='/service'>Услуги</Link></li>
                <li className='header_nav-item'><Link to='/doctors'>Врачи</Link></li>
                <li className='header_nav-item'><Link to='/news'>Новости</Link></li>
                <li className='header_nav-item'><Link to='/#contacts'>Контакты</Link></li>
            </ul>
            <div className='header_lang header-none'>
                <span>RU</span>
                |
                <span>UZ</span>
            </div>
        </header>
    )
}

export default Header