import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { signInUrl, signUpUrl, homeUrl, newMemberUrl } from "./constants/app_urls";
import Error400 from './errors/404.jsx';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import BareLayout from './layouts/BareLayout';

import Dashboard from './pages/Dashboard.jsx';
import SignIn from "./pages/SignIn.jsx";
import CreateAccount from "./pages/CreateAccount.jsx";
import Members from './pages/Members';
// import UnderConstruction from './errors/Construction';
import Settings from './pages/Settings';
import Member from './pages/Member';


const AppRoutes = ()=>{
    return (
        <Routes>

            <Route path={homeUrl} element={<DashboardLayout />}>
                <Route path={''} index element={<Dashboard />} />
                <Route path={'members'} exact element={<Members />} />
                <Route path={'profile'} exact element={<Settings />} />
            </Route>

            <Route 
                path={newMemberUrl} 
                element={
                    <BareLayout>
                        <Member />
                    </BareLayout>
                } 
            />


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