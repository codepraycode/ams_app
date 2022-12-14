import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const {pathname} = useLocation();

    return (
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
    )
}

export default Navbar;
