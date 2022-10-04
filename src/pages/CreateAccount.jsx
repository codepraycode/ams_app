import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInUrl } from '../constants/app_urls';

import Input from '../widgets/Input';
import Form from '../widgets/Form';
// import Checkbox from '../widgets/Checkbox';
import Button from '../widgets/Button';

import { associationSignUpFormConfig } from '../constants/form_configs';
import FileUpload from '../widgets/FileUpload';
import Pager from '../widgets/Pager';


const CreateAccount = () => {

  const navigate = useNavigate();

  return (
    <>

      <div className="title">
        <h4>Create association account</h4>
      </div>

      <Pager row={3}/>


    
      <Form className="form text-left" onSubmit={(e) => { e.preventDefault(); navigate(signInUrl) }}>
        
        <FileUpload
          inputProps={associationSignUpFormConfig.logo}
        />

        <Input inputProps={associationSignUpFormConfig.association_reg_id} />
        <Input inputProps={associationSignUpFormConfig.name} />


        {/* <Checkbox 
          label={
            <>
              I agree the <a href="/" className="text-dark font-weight-bolder">Terms and Conditions</a>
            </>
          }
        /> */}


        <Button 
          className = "btn btn-lg"
          type="submit" label={"Next"} 
        />

      </Form>

      <span className='cta'>Already have an account? <Link to={signInUrl}>Login</Link></span>

    </>
  )
}

export default CreateAccount;