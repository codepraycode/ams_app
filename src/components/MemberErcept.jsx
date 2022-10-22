import React from 'react';
import { placeholder } from '../constants/assets';


const MemberErcept = ({member}) =>{

    return <div className="avatar_pre">
        <div className="avatar sm">
            <img src={placeholder} alt="member image"/>
        </div>
        <span>{member.first_name} {member.last_name}</span>
    </div>
}

export default MemberErcept;