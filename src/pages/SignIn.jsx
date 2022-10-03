import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { signUpUrl } from '../constants/app_urls';
import { curve2 } from '../constants/assets';
import { associationSignInFormConfig } from '../constants/form_configs';



import Input from '../widgets/Input.jsx';
import Form from '../widgets/Form.jsx';
import Button from '../widgets/Button.jsx';
import ToggleSwitch from '../widgets/ToggleSwitch.jsx';

const SignUpForm = () => {
  return (
    <Form classNameName="form text-left">

      {/* {associationSignInFormConfig.email.label && <label>{associationSignInFormConfig.email.label}</label>} */}
      <Input
        inputProps={associationSignInFormConfig.email}
      />

      {/* {associationSignInFormConfig.password.label && <label>{associationSignInFormConfig.password.label}</label>} */}
      <Input inputProps={associationSignInFormConfig.password} />
      


      <ToggleSwitch
        label={ "Remeber me" }
      />


      <Button label={"SIGN IN"} className="btn bg-gradient-info w-100 mt-4 mb-0" />

      <p className="text-sm mt-3 mb-0">
        Don't have an account?  <Link
          to={signUpUrl}
          className="text-info text-gradient font-weight-bold">
          Sign up
        </Link>
      </p>

    </Form>
  )
}


const SignUp = () => {
  useEffect(() => {
    const body = document.querySelector('body')

    // console.log(body.classNameList)
    body.classList.add("bg-white");

    return () => {
      body.classNameList.remove("bg-white")
    }
  })

  return (
    <>
      <section >
        <div className="page-header section-height-100">
          <div className="container">
            
            <div className="row">
              
              <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                
                <div className="card card-plain mt-2">
                  <div className="card-header pb-0 text-left bg-transparent">
                    <h3 className="font-weight-bolder text-info text-gradient text-center mb-5">Association Management System</h3>
                    <h4 className="font-weight-bolde">Welcome back</h4>

                    <p className="mb-0">Enter your email and password to sign in</p>
                  </div>

                  <div className="card-body">

                    <SignUpForm />

                  </div>

                </div>
              </div>

              <div className="col-md-6">
                <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                  <div 
                    className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" 
                    style={{backgroundImage: `url(${curve2})` }}></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default SignUp