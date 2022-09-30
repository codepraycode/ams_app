import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { signInUrl, signUpUrl, homeUrl } from "./constants/app_urls";

import Dashboard from './pages/Dashboard.jsx';
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";


const AppRoutes = ()=>{
    return (
        <Routes>

            <Route path={homeUrl} element={<Dashboard />} />
            <Route path={signInUrl} element={<SignIn />} />
            <Route path={signUpUrl} element={<SignUp />} />
            
        </Routes>
    )
};


export default AppRoutes;