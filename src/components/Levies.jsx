import React from 'react'
import { useSelector } from 'react-redux'
import { getLevies } from '../app/accountSlice'

import Section from './Section';

function Levies() {
    const levies = useSelector(getLevies);

    return (
        <Section title={"Associtation Levies"}>

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
    )
}

export default Levies