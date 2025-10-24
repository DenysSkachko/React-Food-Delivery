import React from 'react'

const Modal = ({isOpen, onClose, children}) => {

    if(!isOpen) return null
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/50 flex-center" >
        <div onClick={e => e.stopPropagation()} className="bg-dark rounded-xl p-6 w-full max-w-md relative">
            {children}
        </div>
    </div>
  )
}

export default Modal