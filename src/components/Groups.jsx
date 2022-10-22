import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { getGroups } from '../app/accountSlice';
import Section from './Section'
import CreateGroup from './CreateGroup';
import { Link } from 'react-router-dom';
import { newMemberUrl } from '../constants/app_urls';

function Groups() {
  const groups = useSelector(getGroups);

  const [showCreateGroup, setShowCreateGroup] = useState(false);

  return (
    <>
      <CreateGroup show={showCreateGroup} onClose={() => setShowCreateGroup(false)}/>
    
      <Section header={{
          title: "Associtation Groups",
          action: {
            label: "Create group",
            act: () => setShowCreateGroup(true)
          }
        }}
      >

        <div className="cards">
          {
            groups.map((group) => (
              <div className='cards_item' key={group.id}>
                <h2>{group.name}</h2>

                <span>
                  <Link to={newMemberUrl}
                    title='Create a member in this group'
                  >
                    Add member
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

export default Groups;