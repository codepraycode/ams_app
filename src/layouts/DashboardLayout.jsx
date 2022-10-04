import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';




const Dashboard = () => {


    return (
        <>

            <header>
                <Navbar />
            </header>

            <main>

                <Outlet/>

            </main>
        </>



    )
}

export default Dashboard;