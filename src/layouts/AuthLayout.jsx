import React from 'react'



function AuthLayout({children}) {
  return (
    <div className="auth_content">

      <h2 className='brand'>AMS App</h2>

      {children}
        
    </div>
  )
}

export default AuthLayout