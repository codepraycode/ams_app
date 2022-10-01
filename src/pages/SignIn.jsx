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
    <Form className="form text-left">

      {associationSignInFormConfig.email.label && <label>{associationSignInFormConfig.email.label}</label>}
      <Input
        inputProps={associationSignInFormConfig.email}
      />

      {associationSignInFormConfig.password.label && <label>{associationSignInFormConfig.password.label}</label>}
      <Input inputProps={associationSignInFormConfig.password} />
      


      <ToggleSwitch
        label={ "Remeber me" }
      />


      <Button label={"SIGN IN"} class="btn bg-gradient-info w-100 mt-4 mb-0" />

      <p className="text-sm mt-3 mb-0">
        Don't have an account?  <Link
          to={signUpUrl}
          class="text-info text-gradient font-weight-bold">
          Sign up
        </Link>
      </p>

    </Form>
  )
}


const SignUp = () => {
  useEffect(() => {
    const body = document.querySelector('body')

    // console.log(body.classList)
    body.classList.add("bg-white");

    return () => {
      body.classList.remove("bg-white")
    }
  })

  return (
    <>
      <section >
        <div class="page-header section-height-100">
          <div class="container">
            
            <div class="row">
              
              <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                
                <div class="card card-plain mt-2">
                  <div class="card-header pb-0 text-left bg-transparent">
                    <h3 class="font-weight-bolder text-info text-gradient text-center mb-5">Association Management System</h3>
                    <h4 class="font-weight-bolde">Welcome back</h4>

                    <p class="mb-0">Enter your email and password to sign in</p>
                  </div>

                  <div class="card-body">

                    <SignUpForm />

                  </div>

                </div>
              </div>

              <div class="col-md-6">
                <div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                  <div 
                    class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" 
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