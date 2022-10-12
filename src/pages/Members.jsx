import React from 'react'
import Section from '../components/Section'

const Members = () => {
  return (
    <Section wrapperProps={{className:"nav_section"}}>

        <ul className="section_nav">
            <li className='active'>
                Group 1
            </li>

            <li>
                Group 2
            </li>
            
            <li>
                Group 3
            </li>
            
        </ul>


        <div className="content">
            content
        </div>

        

    </Section>
  )
}

export default Members