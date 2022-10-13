import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getLevies } from '../app/accountSlice'


import Section from './Section';
import CreateLevy from '../components/CreateLevy';
import { Link } from 'react-router-dom';
import CreateCharge from './CreateCharge';

const Levies = ()=>{
    
    const levies = useSelector(getLevies);

    const [showCreateLevy,setShowCreateLevy] = useState(false);
    const [showCreateLevyCharge,setShowCreateLevyCharge] = useState(false);



    return (
      <>
        <CreateLevy show={showCreateLevy} onClose={()=>setShowCreateLevy(false)}/>
        <CreateCharge show={showCreateLevyCharge} onClose={() => setShowCreateLevyCharge(false)}/>
        
        <Section 
          
          header={{
            title: "Associtation Levy",
            action:{
              label:"Create Levy",
              act:()=>setShowCreateLevy(true)
            }
          }}


        >

          <div className="cards">
            {
                  levies.map((levy)=>(
                      <div className='cards_item' key={levy.id}>
                          <h2>{levy.label}</h2>

                          <span>
                            <Link to="/"
                              title='Create a charge for this levy'
                              onClick={(e)=>{
                                e.preventDefault();

                                setShowCreateLevyCharge(true)
                              }}
                            >
                              Create charge
                            </Link>
                          </span>
                    </div>
                ))
            }
          </div>
          
          
        </Section>
      </>
    )
}

export default Levies