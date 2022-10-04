import React from 'react'
import Navbar from '../components/Navbar';




const Dashboard = () => {


    return (
        <>

            <header>
                <Navbar />
            </header>

            <main>

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

                <p>Rest content</p>

            </main>
        </>



    )
}

export default Dashboard;