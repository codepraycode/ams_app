import React from 'react'
// import { homeUrl } from '../constants/app_urls'
import { error500 } from '../constants/assets'
// import Button from '../widgets/Button.jsx'

const Error500 = () => {
  return (
    <div className="error_content">
          <div className="illu" style={{backgroundImage:`url('${error500}')`}}></div>

          <p className='err_txt'>Something is worng, but it's not your fault</p>

          {/* <Button label="Go home" link={homeUrl}/> */}
    </div>
  )
}

export default Error500