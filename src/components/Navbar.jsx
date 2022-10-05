import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {placeholder} from '../constants/assets';
import {signInUrl} from '../constants/app_urls';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <div className={"top_bar"}>
                <div className="brand">AMS APP</div>


                <div>
                    <div className="account_">
                        <span><Link to={signInUrl}> Association </Link></span>
                        <div className='avatar' onClick={()=>navigate(signInUrl)}>
                            <img src={placeholder} alt="Logo" />
                        </div>
                    </div>
                </div>
                
            </div>

            <nav>
                <NavLink to="/" className={({ isActive }) => (isActive && pathname === "/" ? "active" : "")}>
                    <i className="fas fa-igloo"></i>
                    <span>Dashboard</span>
                </NavLink>

                <NavLink to="/members">
                    <i className="fas fa-users"></i>
                    <span>Members</span>
                </NavLink>

                <NavLink to="/profile">
                    <i className="fas fa-cog"></i>
                    <span>Settings</span>
                </NavLink>
                
            </nav>
        </>
    )
}

export default Navbar;
