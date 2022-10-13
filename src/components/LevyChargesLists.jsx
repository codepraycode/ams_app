import React from 'react'
import { useSelector } from 'react-redux';
import { getLevies } from '../app/accountSlice';

import Section from './Section';
import Table from './Table';

import Button from '../widgets/Button';


const LevyChargeItem = ({levy})=>{

    const {charges} = levy;

    const headers = ['Ref', "Amount", "Date", <>{" "}</>]

    const content = charges.map((each,i)=>{
        return [
            "#12dsa"+i+each.id, // ref
            each.amount, // Amount
            new Date(each.date_created).toDateString(), // Date

            <Button
                label="View"
                variant={"solid center"}

            />
        ]
    })

    return (
        <Table
            header={levy.label}
            tableHeadData={headers}
            tableBodyData={content}
        // checkable={true}
        />
    )
}

const MemberLevyChargeItem = ()=>{

    const headers = ["Levy name", 'Ref', "Date Isuued", "Charge Amount", "Amount Paid", "Amount left",<>{" "}</>]

    const content = [1,2,3,4,5].map((each,i)=>{
        return [
            "Security",
            "#12dsa"+i+each.id, // ref
            new Date().toDateString(), // Date
            "2000", // Amount
            "1000",
            "1000",

            <Button
                label="Pay up"
                variant={"solid center"}
            />
        ]
    })

    return (
        <Table
            header={"Levy Charges"}
            tableHeadData={headers}
            tableBodyData={content}
        // checkable={true}
        />
    )
}


const LevyChargesLists = ({ memberId }) => {
    const levies = useSelector(getLevies);

    if (Boolean(memberId)) return <MemberLevyChargeItem/>

    return (
        <Section
            contentProps={{
                className: "d-flex col-gap-2 row-gap-2 flex-wrap",
            }}
        >


            {
                levies.map((levy) => (<LevyChargeItem levy={levy} key={levy.id}/>))
            }

            

        </Section>
    )
}

export default LevyChargesLists