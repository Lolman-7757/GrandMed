import React, { useState } from 'react'
import './Home.css'
import { TextField } from '@mui/material'

function Home() {
  const [ data, setData ] = useState([])
  const [ canSubmit, setCanSubmit ] = useState(false)
  const [ cantSubmit, setCantSubmit ] = useState(true)

  const checkForm = (e) => {
    e.preventDefault()
    if(data.password === "KhusnudDalbaeb123"){
      setCanSubmit(true)
      alert('MALADEEEES')
    }else{
      alert('Normalno blyat napishi parol suka')
    }
  }
  const checkCanSubmit = () =>{
    if(canSubmit !== true){
      setCantSubmit(!cantSubmit)
    }else{
      setCantSubmit(true)
    }
  }
  return (
    <section className='home'>
      <form onSubmit={(e) => checkForm(e)}>
        <TextField className='home-inputs' id="filled-basic" label="First name" variant="filled" onChange={(e) => setData({...data, name: e.target.value})}/>
        <TextField className='home-inputs' id="filled-basic" label="E-mail" variant="filled" onChange={(e) => setData({...data, email: e.target.value})}/>
        <TextField className='home-inputs' id="filled-basic" label="Password: KhushnudDalbaeb123" variant="filled" onChange={(e) => setData({...data, password: e.target.value})}/>
        <button className={cantSubmit? 'submit-btn' : 'submit-btn submit-btn_cant'} type='submit' onMouseOver={() => checkCanSubmit()}>SUBMIT BLYAT</button>
      </form>
    </section>
  )
}

export default Home