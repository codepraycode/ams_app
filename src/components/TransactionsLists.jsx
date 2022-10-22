import React from 'react'
import { useSelector } from 'react-redux';
import { getLevies } from '../app/accountSlice';

import Section from './Section';
import Table from './Table';

import Button from '../widgets/Button';




const TransactionItem = ()=>{

    const headers = ['Ref', "Amount","Description", "Date Isuued",]

    const content = [1,2,3,4,5].map((each,i)=>{
        return [
            "#12dsa"+i, // ref
            2000,
            "Sample narration",
            new Date().toDateString(), // Date
        ]
    })

    return (
        <Table
            header={"Transactions"}
            tableHeadData={headers}
            tableBodyData={content}
        // checkable={true}
        />
    )
}


const TransactionsLists = ({ memberId }) => {


    return <TransactionItem/>

}

export default TransactionsLists