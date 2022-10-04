import React from 'react'
import AccountEcept from '../components/AccountEcept';
import Groups from '../components/Groups';
import Levies from '../components/Levies';


const Dashboard = () => {  

  return (
    <>
      <div className='intro'>

        <div>
          <h3>Welcome!</h3>

          {/* <p>Last login was 23 hours ago</p> */}
        </div>

        <div>
          <button>Verify Account</button>
          <button>Activate Account</button>
        </div>
      </div>


      <Levies />

      <Groups/>

    </>
  )
}

export default Dashboard;