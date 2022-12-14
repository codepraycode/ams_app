import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';




const Dashboard = () => {


    return (
        <>

            <header>
                <TopBar/>
                <Navbar />
            </header>

            <main>

                <Outlet/>

            </main>
        </>



    )
}

export default Dashboard;