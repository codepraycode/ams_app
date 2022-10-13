import React from 'react';
import Modal from '../widgets/Modal';

import Input from '../widgets/Input';
import Form from '../widgets/Form';
import { associationLevyChargeFormConfig } from '../constants/form_configs';
import Button from '../widgets/Button';

const CreateCharge = ({ show, onClose }) => {

    if (!show) return null;

    return (
        <Modal
            onClose={onClose}
            header={"Create Levy"}
        >
            <div
                style={{
                    width: '90%',
                    margin: "10px auto",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                }}
            >

                <p>Create new levy charge</p>

                <span>
                    This charge will be billed on members already registered on the app as at this moment
                </span>

                <Form
                    className="form text-left"
                    onSubmit={(e) => { e.preventDefault(); onClose() }}
                >
                    <Input inputProps={associationLevyChargeFormConfig.label} />


                    <Button
                        size={"lg"}
                        variant="full"
                        type="submit" label={"Create"}
                    />

                </Form>
            </div>
        </Modal>
    )
}

export default CreateCharge;