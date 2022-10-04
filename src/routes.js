import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { signInUrl, signUpUrl, homeUrl } from "./constants/app_urls";
import Error400 from './errors/404.jsx';
import AuthLayout from './layouts/AuthLayout';

import Dashboard from './pages/Dashboard.jsx';
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";


const AppRoutes = ()=>{
    return (
        <Routes>

            <Route path={homeUrl} element={<Dashboard />} />
            <Route path={signInUrl} element={
                    <AuthLayout>
                        <SignIn />
                    </AuthLayout>
                }
            />
            
            <Route path={signUpUrl} element={
                    <AuthLayout>
                        <SignUp />
                    </AuthLayout>
                }
            />
            
            
            <Route path={'*'} element={<Error400 />} />
            
        </Routes>
    )
};


export default AppRoutes;