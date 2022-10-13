import React from 'react';
import { useParams } from 'react-router-dom';
import LevyChargesLists from '../components/LevyChargesLists';
import TransactionsLists from '../components/TransactionsLists';
import Section from '../components/Section';
import { associationMemberFormConfig } from '../constants/form_configs';
import UnderConstruction from '../errors/Construction';
import Button from '../widgets/Button';
import FileUpload from '../widgets/FileUpload';
import Form from '../widgets/Form';
import Input from '../widgets/Input';

const Member = () => {
    const formConfig = associationMemberFormConfig;

    const { memberId } = useParams();

    const renderCharges = ()=>{
        if (!Boolean(memberId)) return null

        return <LevyChargesLists memberId={memberId} />
    }

    const renderTransactions = ()=>{
        if (!Boolean(memberId)) return null

        return <TransactionsLists memberId={memberId} />
    }

    return (
        <>

        
            <Section
                // header={{
                //     title: "Association Profile",
                // }}

                wrapperProps={{
                    className: "profile_settings members"
                }}

                // contentProps={{
                //     className: "profile_content"
                // }}
            >

                <Form className="form profile_content text-left" onSubmit={(e) => { e.preventDefault(); }}>
                    <div className='d-flex col'>



                        <div className="profile_card grand">
                            {/* <h4>Name and Registration ID</h4> */}


                            <FileUpload
                                inputProps={formConfig.passport}

                                grand={true}
                            />



                        </div>

                        <div className="account_info gray" title='no account'>

                            <p>
                                <span>AccountID: 2341klkj23</span>
                                <span>Record NO: 12345</span>
                            </p>

                            <h3>#0.00</h3>

                            <Button label={"Top up account"} variant="gradient full" size={""} />
                        </div>
                    </div>

                    <div className="grid-2">
                        <div className="profile_card">

                            <>

                                <Input inputProps={formConfig.first_name} />
                                <Input inputProps={formConfig.last_name} />
                                <Input inputProps={formConfig.gender} />
                                <Input inputProps={formConfig.occupation} />

                            </>
                        </div>

                        <div className="profile_card">

                            <>

                                <Input inputProps={formConfig.date_of_birth} />
                                <Input inputProps={formConfig.religion} />
                                <Input inputProps={formConfig.contact} />
                                <Input inputProps={formConfig.email} />

                            </>
                        </div>

                        <div className="profile_card">

                            <>

                                <Input inputProps={formConfig.local_government_of_origin} />
                                <Input inputProps={formConfig.state_of_origin} />
                                <Input inputProps={formConfig.ethnicity} />
                                <Input inputProps={formConfig.nationality} />

                            </>
                        </div>

                        <div className="profile_card">

                            <>

                                <Input inputProps={formConfig.next_of_kin} />
                                <Input inputProps={formConfig.next_of_kin_contact} />
                                <hr />
                                <Input inputProps={formConfig.group} />
                                <Input inputProps={formConfig.group_id} />

                            </>
                        </div>
                    </div>


                    <div className="submit_btn">
                        <Button label={memberId ?"Update account":"Create account"} variant="solid full" size={""} />
                    </div>
                    
                </Form>
                

            </Section>

            
            {/* Charges */}

            {
                memberId && (
                    <Section
                        contentProps={{
                            className: "d-flex col-gap-1 row-gap-2 flex-sm-wrap",
                        }}
                    >


                        {renderCharges()}
                        {renderTransactions()}

                    </Section>
                )
            }
            
            
        </>
    )
}

export default Member