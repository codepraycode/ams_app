import React from 'react';
import { useSelector } from 'react-redux';
import { getGroupByUrl } from '../app/accountSlice';


const MemberGroupErcept = ({ member }) => {
    const group = useSelector((state) => getGroupByUrl(state, member.group_url));

    return <>{member.group_id}, {group?.name}</>
}

export default MemberGroupErcept;