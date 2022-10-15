import React from 'react'
import { useSelector } from 'react-redux';
import { getMembers } from '../app/memberSlice';
import MemberErcept from '../components/MemberErcept';
import MemberGroupErcept from '../components/MemberGroupErcept';
import Section from '../components/Section';
import Table from '../components/Table';
import UnderConstruction from '../errors/Construction'
import Button from '../widgets/Button';

const LevyCharge = () => {
    const headers = [
        "Member", // passport, firstname, lastname
        "Group",
        "Amount Paid", 
        "Amount left", 
        <>{" "}</>
    ]

    const members = useSelector(getMembers);
    

    const membersLists = members.map((each) => (
        [
            <MemberErcept member={each} />,
            <MemberGroupErcept member={each} />,
            1000,
            1000,

            <Button
                label="Pay Up"
                variant={"solid center"}
                onClick={() => {}}
            />
        ]
    ))

    return (
        <Section
            // header={{
            //     title: "Lev"
            // }}
        >


            {/* Rendering members as table */}

            <Table
                header={ "Levy Charge Members (#12312: #2000)" }
                tableHeadData={headers}
                tableBodyData={membersLists}
                size={"w-100"}
            />


        </Section>
    )
}

export default LevyCharge