import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { getGroupByUrl } from '../app/accountSlice'
import { getMembers } from '../app/memberSlice'
import MemberErcept from '../components/MemberErcept'
import MemberGroupErcept from '../components/MemberGroupErcept'
import Section from '../components/Section'
import Table from '../components/Table'
import { homeUrl, newMemberUrl } from '../constants/app_urls'
import Button from '../widgets/Button'




const Members = () => {
    const headers = [
        "Member", // passport, firstname, lastname
        "Contact", 
        "Occupation", //
        "Group",
        "Date Added", // Date Joined,
        <>{" "}</>
    ]

    const members = useSelector(getMembers);
    const navigate = useNavigate()

    const membersLists = members.map((each)=>(
        [
            <MemberErcept member={each}/>,
            each.contact,
            each.occupation,
            <MemberGroupErcept member={each} />,
            new Date(each.date_joined).toDateString(),

            <Button
                label="View Profile"
                variant={"solid center"}
                onClick={() => navigate(`${homeUrl}member/${each.id}`)}
            />
        ]
    ))

    return (
        <Section 
            header={{
                title: "Association Members",
                action:{
                    label:"Create new member",
                    act: () => navigate(newMemberUrl)
                }
            }}
        >


            {/* Rendering members as table */}

            <Table
                header={"Association Members"}
                tableHeadData={headers}
                tableBodyData={membersLists}
                size={"w-100"}
            />
            

        </Section>
    )
}

export default Members