import React from 'react'
import { useSelector } from 'react-redux'
import { getLevies } from '../app/accountSlice'

function Levies() {
    const levies = useSelector(getLevies);

  return (
      <section className='levies_container px-2'>

        <div className="title">
          <span className='label'>Associtation Levies</span>

          <span className='liner'></span>
        </div>

        <div className="levy">
        {
              levies.map((levy)=>(
                  <div className='levy_item' key={levy.id}>
                      <h2>{levy.label}</h2>
                </div>
            ))
        }
        </div>
        
        
      </section>
  )
}

export default Levies