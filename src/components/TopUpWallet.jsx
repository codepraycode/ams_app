import React, { useState } from 'react';
import Modal from '../widgets/Modal';

import Input from '../widgets/Input';
import Form from '../widgets/Form';
import { TopupAccountFormConfig } from '../constants/form_configs';
import Button from '../widgets/Button';

const TopUpWallet = ({ show, onClose }) => {

    // if (!show) return null;

    const [value, setValue] = useState();

  return (
    <Modal
        onClose={onClose}
        header={"TopUp account"}
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
            
            <p>Add to account balance</p>

            <Form 
                className="form text-left" 
                onSubmit={(e) => { e.preventDefault(); onClose(value) }}
            >
                <Input 
                    inputProps={
                        {
                            ...TopupAccountFormConfig.amount, 
                            value:parseInt(value) || '', 
                        }
                    }
                    onChange={(val) => setValue(parseInt(val))}
                />

                <Button
                    size={"lg"}
                    variant="full"
                    type="submit" label={"Topup"}
                />

            </Form>
          </div>
    </Modal>
  )
}

export default TopUpWallet;