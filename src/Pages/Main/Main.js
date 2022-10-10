import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Doctors from '../Doctors/Doctors'
import Home from '../Home/Home'
import News from '../News/News'
import Service from '../Service/Service'
import './Main.css'

function Main() {
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    <Route index element={<Home/>}></Route>
                    <Route path='/service' element={<Service/>}></Route>
                    <Route path='/doctors' element={<Doctors/>}></Route>
                    <Route path='/news' element={<News/>}></Route>
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    )
}

export default Main