import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { homeUrl, signUpUrl } from '../constants/app_urls';
import { curve2 } from '../constants/assets';
import { associationSignInFormConfig } from '../constants/form_configs';



import Input from '../widgets/Input.jsx';
import Form from '../widgets/Form.jsx';
import Button from '../widgets/Button.jsx';
import ToggleSwitch from '../widgets/ToggleSwitch.jsx';

const SignUp = () => {
  useEffect(() => {
    const body = document.querySelector('body')

    // console.log(body.classNameList)
    body.classList.add("bg-white");

    return () => {
      body.classList.remove("bg-white")
    }
  })

  return (
    <>
      <div className="header">

        <h4>Login to association account</h4>
      </div>



      <Form className="form text-left" onSubmit={(e) => { e.preventDefault(); navigate(homeUrl) }}>

        <Input
          inputProps={associationSignInFormConfig.email}
        />

        <Input inputProps={associationSignInFormConfig.password} />



        <ToggleSwitch
          wrapperProps={{ className:"mb-2"}}
          label={"Remeber me"}
        />


        <Button
          className="btn btn-lg "
          type="submit" label={"Sign In"}
        />

      </Form>

      <span className='cta'>
        Don't have an account?  <Link
          to={signUpUrl}
          className="text-info text-gradient font-weight-bold">
          Sign up
        </Link>
      </span>



    </>
  )
}

export default SignUp