import React, { useEffect } from 'react'
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
        { id: 1, content: 'First' , img: 'https://wallpaperaccess.com/full/6999295.jpg'},
        { id: 2, content: 'Second', img: 'https://wallpaperaccess.com/full/6999297.jpg' },
        { id: 3, content: 'Third' , img: 'https://wallpaperaccess.com/full/6999298.jpg'},
        { id: 4, content: 'Fourth', img: 'https://wallpaperaccess.com/full/6999296.jpg' },
        { id: 5, content: 'Fifth', img: 'https://wallpaperaccess.com/full/6999299.jpg' },
        { id: 6, content: 'Sixth', img: 'https://wallpaperaccess.com/full/6999300.jpg' }
    ]


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
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
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
                >
                {
                    developers.map((dev, devID) => {
                        return (
                            <SwiperSlide key={devID}>
                                <div className='developers_item'>
                                    <img src={dev.img}/>
                                    {dev.content}
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                </Swiper>

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