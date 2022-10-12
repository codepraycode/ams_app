import React from 'react'
import AccountEcept from '../components/AccountEcept';
import Groups from '../components/Groups';
import Levies from '../components/Levies';
import Button from '../widgets/Button';


const Dashboard = () => {  

  return (
    <>

      <section className='intro'>

        <div>
          <h3>Welcome!</h3>

          {/* <p>Last login was 23 hours ago</p> */}
        </div>

        <div className={"actions"}>
          <Button 
            label={"Verify Account"} 
            variant={"gradient"}
            size={"lg"}
          />
            
          <Button label={"Activate Account"}
            variant={"gradient"}
            size={"lg"} 
          />
        </div>
        
      </section>


      <section className='sided_section'>
        <Levies />
        <div className="divider"></div>
        <Groups/>
      </section>

    </>
  )
}

export default Dashboard;