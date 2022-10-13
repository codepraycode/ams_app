import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { homeUrl, signInUrl } from '../constants/app_urls';

import Input from '../widgets/Input';
import Form from '../widgets/Form';
// import Checkbox from '../widgets/Checkbox';
import Button from '../widgets/Button';

import { associationSignUpFormConfig } from '../constants/form_configs';
import FileUpload from '../widgets/FileUpload';
import Pager from '../widgets/Pager';



const SigupForm1 = ({ onProceed })=>{
  return (

    <Form className="form text-left" onSubmit={(e) => { e.preventDefault(); onProceed ()}}>

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
        size={"lg"}
        variant="full"
        type="submit" label={"Next"}
      />

    </Form>
  )
}


const SigupForm2 = ({ onProceed })=>{
  return (

    <Form className="form text-left" onSubmit={(e) => { e.preventDefault(); onProceed()}}>

      <Input inputProps={associationSignUpFormConfig.town} />
      <Input inputProps={associationSignUpFormConfig.local_government} />
      <Input inputProps={associationSignUpFormConfig.city} />
      <Input inputProps={associationSignUpFormConfig.country} />



      <Button
        size={"lg"}
        variant="full"
        type="submit" label={"Next"}
      />

    </Form>
  )
}

const SigupForm3 = ({ onProceed })=>{
  return (

    <Form className="form text-left" onSubmit={(e) => { e.preventDefault(); onProceed()}}>

      <Input inputProps={associationSignUpFormConfig.contact} />
      <Input inputProps={associationSignUpFormConfig.email} />
      <Input inputProps={associationSignUpFormConfig.password} />
      <Input inputProps={associationSignUpFormConfig.confirm_password} />



      <Button
        size={"lg"}
        variant="full"
        type="submit" label={"Next"}
      />

    </Form>
  )
}



const CreateAccount = () => {

  const navigate = useNavigate();

  const [stage, setStage] = useState(1);

  let stageContent;


  switch (stage){
    case 1:
      stageContent = <SigupForm1 onProceed={()=>setStage(2)}/>;
      break
    case 2:
      stageContent = <SigupForm2 onProceed={() => setStage(3)} />;
      break
    case 3:
      stageContent = <SigupForm3 onProceed={() => navigate(signInUrl)} />;
      break
    default:
      break;
  }

  return (
    <>

      <div className="title">
        <h4>Create association account</h4>
      </div>

      <Pager row={3} active={stage}/>

      {stageContent}      
    
      <span className='cta'>Already have an account? <Link to={signInUrl}>Login</Link></span>

    </>
  )
}

export default CreateAccount;