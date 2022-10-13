import React from 'react';
import { Link } from 'react-router-dom';
import { placeholder } from '../constants/assets';
import { signInUrl } from '../constants/app_urls';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
    const navigate = useNavigate();

    return (
        <div className={"top_bar"}>
            <div className="brand">AMS APP</div>


            <div>
                <div className="account_">
                    <span><Link to={signInUrl}> Association </Link></span>
                    <div className='avatar' onClick={() => navigate(signInUrl)}>
                        <img src={placeholder} alt="Logo" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopBar;
