import React from 'react'



function AuthLayout({children}) {
  return (
    <div className="auth_card">

      <h2 className='brand'>AMS App</h2>

      <div className="auth_content">
        {children}
      </div>
      
        
    </div>
  )
}

export default AuthLayout