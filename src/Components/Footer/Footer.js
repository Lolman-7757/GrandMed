import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import { Input } from '@nextui-org/react'

function Footer() {
    return (
        <footer>
            <div className='container b1'>
                <div className='footer_upper'>
                    <div className='footer_logo'>
                        <div className='footer_logo_name'>
                            <Logo/>
                            Connectron
                        </div>
                        <span>Qaraqalpaqstan, Nukus, st.Bilmimen</span>
                        <span className='footer_logo_contact'>Contact Us: <a href='tel:+998913030519'>+998-91-303-05-19</a></span>
                        <nav className='social-media'>
                            <a href='https://facebook.com'><BsFacebook/></a>
                            <a href='https://instagram.com' className='last'><BsInstagram/></a>
                            <a href='https://twitter.com' className='last'><BsTwitter/></a>
                            <a href='https://youtube.com' className='last'><BsYoutube/></a>
                        </nav>
                    </div>
                    <div className='footer_nav'>
                        <ul>
                            <li className='footer_nav-title'>Category</li>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Reviews</li>
                        </ul>
                        <ul>
                            <li className='footer_nav-title'>About</li>
                            <li>Partners</li>
                            <li>Careers</li>
                            <li>Community</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className='footer_subscribe'>
                        <span className='footer_subscribe-title'>Subscribe newsletter</span>
                        <span className='footer_subscribe-descr'>Sign up for tips, new offers, and exclusive promos.</span>
                        <form>
                        <Input  placeholder='Enter your mail' />
                            <button className='btn_style'>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className='footer_bottom'>
                    <div className='footer_rights'>© 2023 Lolman - All rights reserved.</div>
                    <ul className='footer_terms'>
                        <Link>Privacy</Link>
                        <Link>Security</Link>
                        <Link>Terms</Link>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer