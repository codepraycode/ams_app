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


const LevyChargesLists = () => {
    const levies = useSelector(getLevies);


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