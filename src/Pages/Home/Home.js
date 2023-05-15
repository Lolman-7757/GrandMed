import React, { useState } from 'react'
// ICONS
import { RxRocket } from 'react-icons/rx'
import { MdOutlineGroups, MdOutlineDesignServices, MdDeveloperMode } from 'react-icons/md'
import { AiOutlineLike, AiOutlineAppstore } from 'react-icons/ai'
import { BsChevronRight } from 'react-icons/bs'
import TextArea from 'antd/es/input/TextArea'
// STYLE
import './Home.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

function Home() {
    // SLICK SLIDER SETTINGS
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    const developers = [
        { id: 1, content: { name: 'John Doe', job: 'Frontend Developer' }, img: 'https://wallpaperaccess.com/full/6999295.jpg' },
        { id: 2, content: { name: 'John Doe', job: 'Frontend Developer' }, img: 'https://wallpaperaccess.com/full/6999297.jpg' },
        { id: 3, content: { name: 'John Doe', job: 'Frontend Developer' }, img: 'https://wallpaperaccess.com/full/6999298.jpg' },
        { id: 4, content: { name: 'John Doe', job: 'Frontend Developer' }, img: 'https://wallpaperaccess.com/full/6999296.jpg' },
        { id: 5, content: { name: 'John Doe', job: 'Frontend Developer' }, img: 'https://wallpaperaccess.com/full/6999299.jpg' },
        { id: 6, content: { name: 'John Doe', job: 'Frontend Developer' }, img: 'https://wallpaperaccess.com/full/6999300.jpg' }
    ]

        const [active, setActive] = useState(0);

        const artists = [
            {
                name: "Dom Dolla",
                description: `Dom Dolla is one of the latest Australian DJ/Producers to break globally following a succession of releases like “Take It”, “San Frandisco” & “Pump The Brakes”. Dom’s unique blend of house music has amassed over 300 million+ streams, Platinum-certified records, ARIA Award for Best Dance Release, back to back Beatport #1’s, US Billboard Dance top 10’s, triple j’s hottest 100, Shazam & Spotify Global top 100 charts.`,
                backgroundUrl: "https://assets.codepen.io/152347/dom-dolla.jpg"
            },
            {
                name: "Crooked Colours",
                description: `Crooked Colours are a three-piece band formed in Perth, Western Australia, consisting of members Phil Slabber, Leon Debaughn and Liam Merrett-Park. Starting out as house party DJs before forming in 2013, the trio have amassed a large following, peaking at number 1 on the Australian Dance Album ARIA Charts for their album "Langata".`,
                backgroundUrl: "https://assets.codepen.io/152347/crooked-colours.jpg"
            },
            {
                name: "Mallrat",
                description: `Grace Kathleen Elizabeth Shaw, known professionally as Mallrat, is a 23-year-old Australian musician, singer, and rapper from Brisbane.  Mallrat released her official debut single, “Suicide Blonde” in 2015 whilst in her last year of High School. Since then, she has gone on to release three EPs: Uninvited (2016), In the Sky (2018) and Driving Music (2019).`,
                backgroundUrl: "https://assets.codepen.io/152347/mallrat.jpg"
            },
            {
                name: "Mallrat",
                description: `Grace Kathleen Elizabeth Shaw, known professionally as Mallrat, is a 23-year-old Australian musician, singer, and rapper from Brisbane.  Mallrat released her official debut single, “Suicide Blonde” in 2015 whilst in her last year of High School. Since then, she has gone on to release three EPs: Uninvited (2016), In the Sky (2018) and Driving Music (2019).`,
                backgroundUrl: "https://assets.codepen.io/152347/mallrat.jpg"
            },
            {
                name: "Mallrat",
                description: `Grace Kathleen Elizabeth Shaw, known professionally as Mallrat, is a 23-year-old Australian musician, singer, and rapper from Brisbane.  Mallrat released her official debut single, “Suicide Blonde” in 2015 whilst in her last year of High School. Since then, she has gone on to release three EPs: Uninvited (2016), In the Sky (2018) and Driving Music (2019).`,
                backgroundUrl: "https://assets.codepen.io/152347/mallrat.jpg"
            },
            {
                name: "Mallrat",
                description: `Grace Kathleen Elizabeth Shaw, known professionally as Mallrat, is a 23-year-old Australian musician, singer, and rapper from Brisbane.  Mallrat released her official debut single, “Suicide Blonde” in 2015 whilst in her last year of High School. Since then, she has gone on to release three EPs: Uninvited (2016), In the Sky (2018) and Driving Music (2019).`,
                backgroundUrl: "https://assets.codepen.io/152347/mallrat.jpg"
            },
            
            ];

        if (window.scrollY > 300) {
            console.log('yes')
        } else {
            console.log('no')
        }
        return (
            <>
                <section className='home'>
                    <div className='wrapper'></div>
                    <div className='container'>
                        <div className='home_text'>
                            <p className='home_text-title'>Hello, We are</p>
                            <h1>Connectron Team</h1>
                            <p className='home_text-descr'>
                                We will provide best web design and business devlopment
                                service clients expectation and satisfaction guarantee.
                            </p>
                            <button className='btn_style'>Free consultation</button>
                        </div>
                        <div className='home_img'>
                            <img src='./author2.png' alt='strange man' />
                        </div>
                    </div>
                </section>
                <section className='service'>
                    <div className='container'>
                        <h2 className='service_title'>
                            We provide the Best Web Services
                        </h2>
                        <div className='service_content'>
                            <div className='service_content-wrapper'>
                                <div className='service_content-item'>
                                    <div className='service_content-icon'><RxRocket /></div>
                                    <p className='service_content-number'>3+</p>
                                    <p className='service_content-descr'>Projects Completed</p>
                                </div>
                                <div className='service_content-item'>
                                    <div className='service_content-icon'><MdOutlineGroups /></div>
                                    <p className='service_content-number'>10+</p>
                                    <p className='service_content-descr'>Active Clients</p>
                                </div>
                                <div className='service_content-item'>
                                    <div className='service_content-icon'><AiOutlineLike /></div>
                                    <p className='service_content-number'>100+</p>
                                    <p className='service_content-descr'>Happy Clients</p>
                                </div>
                            </div>
                        </div>
                        <h2 className='service_title'>
                            What Services We are Offering
                        </h2>
                        <div className='service_offer'>
                            <div className='service_offer-wrapper'>
                                <div className='service_offer-icon'><MdOutlineDesignServices /></div>
                                <div className='service_offer-item'>
                                    <div className='service_offer-title'>Website Design</div>
                                    <div className='service_offer-descr'>Need something changed or is there something not quite working  the  best service</div>
                                    <button className='service_offer-btn'><BsChevronRight /></button>
                                </div>
                            </div>
                            <div className='service_offer-wrapper'>
                                <div className='service_offer-icon'><MdDeveloperMode /></div>
                                <div className='service_offer-item'>
                                    <div className='service_offer-title'>Web Development</div>
                                    <div className='service_offer-descr'>Need something changed or is there something not quite working  the  best service</div>
                                    <button className='service_offer-btn'><BsChevronRight /></button>
                                </div></div>
                            <div className='service_offer-wrapper'>
                                <div className='service_offer-icon'><AiOutlineAppstore /></div>
                                <div className='service_offer-item'>
                                    <div className='service_offer-title'>Web Application</div>
                                    <div className='service_offer-descr'>Need something changed or is there something not quite working  the  best service</div>
                                    <button className='service_offer-btn'><BsChevronRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='developers'>
                    {/* <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1.5}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    > */}

                        <ul className='developers_accordeon'>
                            {artists.map((artist, i) => (
                                <li
                                    key={i}
                                    style={{ backgroundImage: `url(${artist.backgroundUrl})` }}
                                    role="button"
                                    className={ `developers_accordeon-item ${active === i ? 'active' : ''}`}
                                    onClick={() => setActive(i)}
                                >
                                    <h3>{artist.name}</h3>
                                    <div className="section-content">
                                        <div className="inner">
                                            <div className="bio">
                                                <h2>{artist.name}</h2>
                                                <p>{artist.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {/* {
                    developers.map((dev, devID) => {
                        return (
                            <SwiperSlide key={devID}>
                                <div className='developers_item'>
                                    <img src={dev.img}/>
                                    <p>{dev.content.name}</p>
                                    <p>{dev.content.job}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                } */}
                    {/* </Swiper> */}

                </section>
                <section className='contact'>
                    <div className='container'>
                        <h2 className='contact_title'>Contact Us</h2>
                        <form>
                            <fieldset>
                                <label>Full Name</label>
                                <input placeholder='Enter your full name' />
                            </fieldset>
                            <fieldset>
                                <label>Email Address</label>
                                <input placeholder='Enter  your mail' />
                            </fieldset>
                            <fieldset>
                                <label>Deadline</label>
                                <input placeholder='Projects deadline' />
                            </fieldset>
                            <fieldset>
                                <label>Budget</label>
                                <input placeholder='Enter  your budget' />
                            </fieldset>
                            <fieldset>
                                <label>Write To Us</label>
                                <TextArea rows={4} />
                            </fieldset>
                        </form>
                    </div>
                </section>
            </>
        )
    }

    export default Home