import React from 'react'
import { useSelector } from 'react-redux';
import { getGroups } from '../app/accountSlice';
import Section from './Section'

function Groups() {
  const groups = useSelector(getGroups);

  return (
    <Section header={{
        title: "Associtation Groups",
        action: {
          label: "Create group",
          act: () => {}
        }
      }}
    >

      <div className="cards">
        {
          groups.map((group) => (
            <div className='cards_item' key={group.id}>
              <h2>{group.name}</h2>
            </div>
          ))
        }
      </div>
    </Section>
  )
}

export default Groups;