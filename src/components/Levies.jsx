import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getLevies } from '../app/accountSlice'


import Section from './Section';
import CreateLevy from '../components/CreateLevy';

const Levies = ()=>{
    
    const levies = useSelector(getLevies);

    const [showCreateLevy,setShowCreateLevy] = useState(false);



    return (
      <>
        <CreateLevy show={showCreateLevy} onClose={()=>setShowCreateLevy(false)}/>
        
        <Section 
          
          header={{
            title: "Associtation Levies",
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
                    </div>
                ))
            }
          </div>
          
          
        </Section>
      </>
    )
}

export default Levies