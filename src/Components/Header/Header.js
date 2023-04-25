import React, { useState } from 'react'
import './Header.css'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import { BsListNested } from 'react-icons/bs'

function Header() {
    const [ header, setHeader ] = useState(false)
    const [ navigation, setNavigation ] = useState(false)
    window.addEventListener('scroll', () => {
        window.scrollY > 100 ? setHeader(true) : setHeader(false)
    })
    return (
        <header className={header ? 'active' : 'non-active'}>
            <div className='container'>
                <Logo />
                <ul className='nav'>
                    <li className='border-animation'><Link>Home</Link></li>
                    <li className='border-animation'><Link>Service</Link></li>
                    <li className='border-animation'><Link>Portfolio</Link></li>
                    <li className='border-animation'><Link>Blog</Link></li>
                </ul>
                <button className='btn_style'>Contact Us </button>
                <div className='menu-btn'>
                    <BsListNested onClick={(()=>{setNavigation(!navigation)})}/>
                </div>
            </div>
            <nav className={`navigation navigation-${navigation? 'active' : 'closed'}`}>
                <div className='navigation-wrapper'>
                    <ul>
                        <li className='border-animation'><Link>Home</Link></li>
                        <li className='border-animation'><Link>Service</Link></li>
                        <li className='border-animation'><Link>Portfolio</Link></li>
                        <li className='border-animation'><Link>Blog</Link></li>
                    </ul>
                    <button className='btn_style'>Contact Us </button>
                </div>
            </nav>
        </header>
    )
}

export default Header