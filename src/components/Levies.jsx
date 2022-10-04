import React from 'react'
import { useSelector } from 'react-redux'
import { getLevies } from '../app/accountSlice'

function Levies() {
    const levies = useSelector(getLevies);

  return (
      <section className='levy px-2'>
        {
              levies.map((levy)=>(
                  <div className='levy_item' key={levy.id}>
                      <h2>{levy.label}</h2>
                </div>
            ))
        }
        
        
      </section>
  )
}

export default Levies