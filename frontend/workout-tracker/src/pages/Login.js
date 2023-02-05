import React from 'react'
import Navbar from '../components/Navbar';
import backgroundImage from '../images/snowboards.jpg'
import Modal from '../components/Modal'

function Login() {

  return (

    // <div className='h-screen bg-slate-200 '>
    <div style={{height: '100vh', backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <Navbar />
        <div className='flex flex-col gap-8 pt-96 p-8 justify-between'>
            <h4 className='lg:text-3xl font-bold text-xl'>The place to be for</h4>
            <h1 className='lg:text-8xl font-bold text-4xl'>Trading your ski gear</h1>
            <p className='font bold lg:text-2xl text-lg'>Find people in your area to temporarily swap out your gear!</p>
        </div>
        {/* <Modal /> */}
    </div>

  )
}

export default Login