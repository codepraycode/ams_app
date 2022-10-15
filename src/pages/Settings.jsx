import React from 'react'
// import { useSelector } from 'react-redux';
// import { getAccount } from '../app/accountSlice';
import Section from '../components/Section'
import Table from '../components/Table';

import { associationSignUpFormConfig } from '../constants/form_configs';
import Button from '../widgets/Button';
import FileUpload from '../widgets/FileUpload';
import Form from '../widgets/Form';
import Input from '../widgets/Input';


const AssociationInvoices = ()=>{
    const headers = ['InvoceId', "Amount", "Description", "Date Isuued", "Date Paid", <>{" "}</>]

    const content = [1, 2, 3, 4, 5].map((each, i) => {
        return [
            "#12dsa" + i, // ref
            2000,
            "Sample narration for a sample invoice UI",
            new Date().toDateString(), // Date
            new Date().toDateString(), // Date paid

            <Button
                label="Paid"
                variant={"solid center"}
                onClick={
                    () =>{}
                }

            />
        ]
    })

    return (
        <Table
            header={"Invoices"}
            tableHeadData={headers}
            tableBodyData={content}
        // checkable={true}
        />
    )
}

const Settings = () => {
    // const association = useSelector(getAccount);

    return (
        <>
            <Section
                header={{
                    title: "Association Profile",
                }}

                wrapperProps={{
                    className:"profile_settings"
                }}

                contentProps={{
                    className:"profile_content"
                }}
            >


                <div className="profile_card grand">
                    {/* <h4>Name and Registration ID</h4> */}
                    <Form className="form text-left" onSubmit={(e) => { e.preventDefault(); }}>

                        <FileUpload
                            inputProps={associationSignUpFormConfig.logo}
                            editing={true}
                            grand={true}
                        />

                    </Form>
                </div>
                <div className="profile_card">
                    {/* <h4>Name and Registration ID</h4> */}
                    <Form className="form text-left" onSubmit={(e) => { e.preventDefault(); }}>

                        <Input inputProps={associationSignUpFormConfig.association_reg_id} editing={true}/>
                        <Input inputProps={associationSignUpFormConfig.name}  editing={true}/>

                        <Input inputProps={associationSignUpFormConfig.email}  editing={true}/>
                        <Input inputProps={associationSignUpFormConfig.contact}  editing={true}/>

                    </Form>
                </div>
                
                <div className="profile_card">

                    {/* <h4> Location</h4> */}
                    <Form className="form text-left" onSubmit={(e) => { e.preventDefault(); }}>
                        
                        <Input inputProps={associationSignUpFormConfig.town}  editing={true}/>
                        <Input inputProps={associationSignUpFormConfig.local_government}  editing={true}/>
                        <Input inputProps={associationSignUpFormConfig.city}  editing={true}/>
                        <Input inputProps={associationSignUpFormConfig.country}  editing={true}/>

                    </Form>
                </div>
                
            </Section>

            <Section
                // contentProps={{
                //     className: "d-flex col-gap-1 row-gap-2 flex-sm-wrap",
                // }}
            >


                <AssociationInvoices/>

            </Section>
        </>
    )
}

export default Settings