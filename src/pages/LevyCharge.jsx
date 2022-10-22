import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { getMembers } from '../app/memberSlice';
import MemberErcept from '../components/MemberErcept';
import MemberGroupErcept from '../components/MemberGroupErcept';
import Payup from '../components/Payup';
import Section from '../components/Section';
import Table from '../components/Table';
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

    const [showPay, setShowPay] = useState(false);
    

    const membersLists = members.map((each) => (
        [
            <MemberErcept member={each} />,
            <MemberGroupErcept member={each} />,
            1000,
            1000,

            <Button
                label="Pay Up"
                variant={"solid center"}
                onClick={() => setShowPay(true)}
            />
        ]
    ))

    return (
        <>
            <Payup show={showPay} onClose={()=>setShowPay(false)}/>
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
        </>
    )
}

export default LevyCharge