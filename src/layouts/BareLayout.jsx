import React from 'react'
import { Outlet } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import TopBar from '../components/TopBar';




const BareLayour = ({children}) => {


    return (
        <>

            <header>
                <TopBar />

                <BreadCrumb/>
            </header>

            <main>

                {children}

            </main>
        </>



    )
}

export default BareLayour;