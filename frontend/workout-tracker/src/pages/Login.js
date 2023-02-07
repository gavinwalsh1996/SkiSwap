import React, { useState } from 'react'
import backgroundImage from '../images/snowboards.jpg'
import Modal from '../components/Modal'
import Button from '../components/Button'

function Login() {

  //State for modal
  const [openModal, setOpenModal] = useState(false)

  // Function to opem modal
  const toggleModal = () => {
    setOpenModal(openModal => !openModal);
  }

  return (
    // Navbar for landing page
    <div style={{height: '100vh', backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>   
      <nav className='bg-transparent text-black py-3 px-5 flex justify-between items-end
          flex-col lg:flex-row border-b-2 border-white fixed w-full
          z-50'>
          {/* Logo */}
          <span className="lg:block hidden cursor-pointer font-bold text-3xl">SkiSwap</span>
          <Button buttonText={'Sign Up'} toggleModal={toggleModal}  />
          <Modal openModal={openModal} toggleModal={toggleModal}/>
      </nav>

        <div className='flex flex-col gap-8 pt-96 p-8 justify-between'>
            <h4 className='lg:text-3xl font-bold text-xl'>The place to be for</h4>
            <h1 className='lg:text-8xl font-bold text-4xl'>Trading your ski gear</h1>
            <p className='font bold lg:text-2xl text-lg'>Find people in your area to temporarily swap out your equipment!</p>
        </div>
        {/* <Modal /> */}
    </div>

  )
}

export default Login