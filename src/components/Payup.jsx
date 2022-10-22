import React, { useState } from 'react';
import Modal from '../widgets/Modal';

import Input from '../widgets/Input';
import Form from '../widgets/Form';
import { LevyChargePaymentFormConfig } from '../constants/form_configs';
import Button from '../widgets/Button';

const Payup = ({ show, onClose }) => {

    if (!show) return null;

    const [value, setValue] = useState();

  return (
    <Modal
        onClose={onClose}
        header={"Levy Payment"}
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
            
            <h5>Pay levy charge</h5>
            <p>Overflow of pay will be added to member's account balance</p>

            <Form 
                className="form text-left" 
                onSubmit={(e) => { e.preventDefault(); onClose(value) }}
            >
                <Input 
                    inputProps={
                        {
                              ...LevyChargePaymentFormConfig.amount, 
                            value:parseInt(value) || '', 
                        }
                    }
                    onChange={(val) => setValue(parseInt(val))}
                />

                <Input 
                    inputProps={
                        {
                              ...LevyChargePaymentFormConfig.date, 
                        }
                    }
                    // onChange={(val) => setValue(parseInt(val))}
                />

                <Button
                    size={"lg"}
                    variant="full"
                    type="submit" label={"Pay"}
                />

            </Form>
          </div>
    </Modal>
  )
}

export default Payup;