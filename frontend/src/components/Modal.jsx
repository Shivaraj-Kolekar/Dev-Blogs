import React from 'react'
import { useClerk } from '@clerk/clerk-react'

const Modal = ({ show, handleClose }) => {
  const { openSignUp } = useClerk()

  if (!show) {
    return null
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Please Sign Up or Sign In</h2>
        <button onClick={openSignUp}>Sign Up</button>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  )
}

export default Modal
