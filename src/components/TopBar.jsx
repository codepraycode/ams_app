import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { placeholder } from '../constants/assets';
import { signInUrl } from '../constants/app_urls';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountSignedIn, updateSignIn } from '../app/accountSlice';

const TopBar = () => {
    const navigate = useNavigate();

    const storeDispatch = useDispatch();
    const signedIn = useSelector(getAccountSignedIn);

    const navToAuth = ()=>{
        if(!signedIn){
            navigate(signInUrl);
        }
    }

    useEffect(()=>{
        navToAuth();
    }, [signedIn])

    return (
        <div className={"top_bar"}>
            <div className="brand">AMS APP</div>


            <div>
                <div 
                    className="account_" 
                    onClick={() => {
                        storeDispatch(updateSignIn(false));
                    }}
                    title="Logout"
                >
                    <span>
                        <Link 
                            to={signInUrl} 
                            onClick={(e)=>{
                                e.preventDefault();
                                // storeDispatch(updateSignIn(false));
                            }}
                            // title="Logout"
                        > 
                            Association 
                        </Link>
                    </span>

                    <div className='avatar' onClick={() => navigate(signInUrl)}>
                        <img src={placeholder} alt="Logo" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopBar;
