import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { signInUrl, signUpUrl, homeUrl } from "./constants/app_urls";

import Dashboard from './screens/Dashboard.jsx';
import SignIn from "./screens/SignIn.jsx";
import SignUp from "./screens/SignUp.jsx";


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