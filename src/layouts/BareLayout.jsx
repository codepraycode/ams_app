import React from 'react'
import { Outlet } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import TopBar from '../components/TopBar';




const BareLayour = ({children, header}) => {


    return (
        <>

            <header>
                <TopBar />

                <BreadCrumb header={header}/>
            </header>

            <main>

                {children}

            </main>
        </>



    )
}

export default BareLayour;