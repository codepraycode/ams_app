import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';



const Dashboard = () => {
  useEffect(() => {
    const body = document.querySelector('body')

    // console.log(body.classNameList)
    body.classList.add("bg-gray-100");

    return () => {
      body.classList.remove("bg-gray-100")
    }
  })


  return (<p>Rest content</p>)
}

export default Dashboard;