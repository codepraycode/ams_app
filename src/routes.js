import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { signInUrl, signUpUrl, homeUrl } from "./constants/app_urls";
import Error400 from './errors/404.jsx';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';

import Dashboard from './pages/Dashboard.jsx';
import SignIn from "./pages/SignIn.jsx";
import CreateAccount from "./pages/CreateAccount.jsx";
import UnderConstruction from './errors/Construction';


const AppRoutes = ()=>{
    return (
        <Routes>

            <Route path={homeUrl} element={<DashboardLayout />}>
                <Route path={''} index element={<Dashboard />} />
                <Route path={'members'} exact element={<UnderConstruction />} />
                <Route path={'profile'} exact element={<UnderConstruction />} />
            </Route>


            <Route path={signInUrl} element={
                    <AuthLayout>
                        <SignIn />
                    </AuthLayout>
                }
            />
            
            <Route path={signUpUrl} element={
                    <AuthLayout>
                        <CreateAccount />
                    </AuthLayout>
                }
            />


            
            
            <Route path={'*'} element={<Error400 />} />
            
        </Routes>
    )
};


export default AppRoutes;