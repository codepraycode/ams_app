import React from 'react';
import Modal from '../widgets/Modal';

import Input from '../widgets/Input';
import Form from '../widgets/Form';
import { associationLevyFormConfig } from '../constants/form_configs';
import Button from '../widgets/Button';

const CreateLevy = ({ show, onClose }) => {

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
                display:'flex',
                flexDirection:'column',
                alignItems:'stretch',
            }}
        >
            
            <p>Create new association levy</p>

            <Form 
                className="form text-left" 
                onSubmit={(e) => { e.preventDefault(); onClose() }}
            >
                <Input inputProps={associationLevyFormConfig.label} />

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

export default CreateLevy;