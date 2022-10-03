import React from 'react'
import { homeUrl } from '../constants/app_urls'
import { error404 } from '../constants/assets'
import Button from '../widgets/Button.jsx'

const Error400 = () => {
    return (

        <div className='error_page'>
            <div className="error_content">
                <div className="illu" style={{ backgroundImage: `url('${error404}')` }}></div>

                {/* <p className='err_txt'>Something is worng, but it's not your fault</p> */}

                <Button label="Go home" link={homeUrl} />
            </div>
        </div>
    )
}

export default Error400;