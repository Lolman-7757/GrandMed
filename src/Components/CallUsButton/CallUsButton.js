import React from 'react'
import './CallUsButton.css'
import { BsFillTelephoneFill } from 'react-icons/bs'

function CallUsButton() {
    return (
        <a className='button-call' href='tel:+998913821334'>Позвоните нам <BsFillTelephoneFill/></a>
    )
}

export default CallUsButton