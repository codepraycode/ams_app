import React from 'react'
import { construction } from '../constants/assets'


const UnderConstruction = () => {
    return (

        <div className='error_page mini'>
            <div className="error_content">
                <div className="illu" style={{ backgroundImage: `url('${construction}')` }}></div>

                <p className='err_txt'>This page is under construction</p>
            </div>
        </div>
    )
}

export default UnderConstruction;