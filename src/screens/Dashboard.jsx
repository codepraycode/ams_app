import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      Dashboard

      <Link to="signin">Signin</Link>
      <Link to="signup">Signup</Link>
    </div>



  )
}

export default Dashboard;