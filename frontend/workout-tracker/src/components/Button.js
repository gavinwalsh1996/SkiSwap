import React from 'react'

function Button({buttonText, toggleModal}) {

  return (

    <button className="border-black border-2 w-24 h-12 rounded-3xl hover:bg-yellow-300" onClick={toggleModal}>
        <span className="font-bold text-xl">{buttonText}</span>
    </button>

  )
}

export default Button