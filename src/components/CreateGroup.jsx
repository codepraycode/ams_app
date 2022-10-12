import React from 'react';
import Modal from '../widgets/Modal';

import Input from '../widgets/Input';
import Form from '../widgets/Form';
import { associationGroupFormConfig } from '../constants/form_configs';
import Button from '../widgets/Button';

const CreateGroup = ({ show, onClose }) => {

    if (!show) return null;

  return (
    <Modal
        onClose={onClose}
        header={"Create Group"}
    >
        <div 
            style={{
                width: '80%',
                margin: "10px auto",
                display:'flex',
                flexDirection:'column',
                alignItems:'stretch',
            }}
        >
            
            <h4>Create new association group</h4>
            <p>this group name will be chained with association's address when making up a member's address</p>

            <Form 
                className="form text-left" 
                onSubmit={(e) => { e.preventDefault(); onClose() }}
            >
                  <Input inputProps={associationGroupFormConfig.name} />

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

export default CreateGroup;