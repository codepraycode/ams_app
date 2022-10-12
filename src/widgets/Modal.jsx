import React from 'react'

const Modal = ({header, onClose, children}) => {
  return (
    <div className="modal_container">
        

        <div className="modal_content">
            <div className="modal_header">
                  <h3>{header}</h3>

                <span className='close' onClick={onClose}>
                    <i className="fas fa-times"></i>
                </span>

            </div>

            <div className="modal_body">
                  {children}
            </div>
        </div>

    </div>
  )
}

export default Modal