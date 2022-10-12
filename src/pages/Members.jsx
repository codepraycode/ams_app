import React from 'react'
import { useSelector } from 'react-redux'
import { getMembers } from '../app/memberSlice'
import Section from '../components/Section'
import Table from '../components/Table'
import Button from '../widgets/Button'


const MemberErcept = ({member}) =>{

    return <>{member.first_name} {member.last_name}</>
}

const MemberGroupErcept = ({member}) =>{

    return <>member group</>
}

const Members = () => {
    const headers = [
        "Member", // passport, firstname, lastname
        "Contact", 
        "Occupation", //
        "Group",
        // "Ethnicity",
        // "state_of_origin",
        "Joined", // Date Joined,
        <>{" "}</>
    ]

    const members = useSelector(getMembers);

    const membersLists = members.map((each)=>(
        [
            <MemberErcept member={each}/>,
            each.contact,
            each.occupation,
            <MemberGroupErcept/>,
            new Date(each.date_joined).toDateString(),

            <Button
                label="View Profile"
                variant={"solid center"}

            />
        ]
    ))

    return (
        <Section 
            header={{
                title: "Association Members",
                action:{
                    label:"Create new member",
                    act: ()=>{}
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