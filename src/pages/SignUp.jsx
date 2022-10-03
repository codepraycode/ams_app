import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { signInUrl, signUpUrl } from '../constants/app_urls';

import { curve1 } from '../constants/assets';


import Input from '../widgets/Input';
import Form from '../widgets/Form';
import Checkbox from '../widgets/Checkbox';
import Button from '../widgets/Button';

import { associationSignUpFormConfig } from '../constants/form_configs';
import FileUpload from '../widgets/FileUpload';



const SignInForm = () =>{
  return (
    <Form className="form text-left">
      <FileUpload 
        inputProps={associationSignUpFormConfig.logo}
      />

      <Input inputProps={associationSignUpFormConfig.association_reg_id}/>
      <Input inputProps={associationSignUpFormConfig.name}/>


      <Checkbox 
        label={
          <>
            I agree the <a href="/" className="text-dark font-weight-bolder">Terms and Conditions</a>
          </>
        }
      />


      <Button label={"SIGN UP"}/>

      <p className="text-sm mt-3 mb-0">
        Already have an account?  <Link 
            to={signInUrl} 
            className="text-dark font-weight-bolder">
              Sign in
        </Link>
      </p>

    </Form>
  )
}


const SignIn = () => {


  useEffect(()=>{
    const body = document.querySelector('body')

    // console.log(body.classList)
    body.classList.add("bg-gray-100");

    return ()=>{
      body.classList.remove("bg-gray-100")
    }
  })


  return (
    <>

      <section className="h-100-vh mb-8">
        <div 
          className="page-header align-items-start section-height-50 pt-5 pb-11 m-3 border-radius-lg" 
          style={{backgroundImage: `url(${curve1})` }}
        >
          <span className="mask bg-gradient-dark opacity-6"></span>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 text-center mx-auto">
                <h1 className="text-white mb-2 mt-5">
                  AMS APP
                </h1>
                <p className="text-lead text-white">
                  create your association
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="container">
          <div className="row mt-lg-n10 mt-md-n11 mt-n10">
            <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
              
              <div className="card z-index-0">
                
                <div className="card-header text-center pt-4">
                  <h5>Create account</h5>
                </div>

                <div className="row px-xl-5 px-sm-4 px-3">

                  <div className="col-3 ms-auto px-1">
                    <a className="btn btn-outline-light w-100" href="/">
                      
                    </a>
                  </div>
                  
                  <div className="col-3 px-1">
                    <a className="btn btn-outline-light w-100" href="/">
                      
                    </a>
                  </div>

                  <div className="col-3 me-auto px-1">
                    <a className="btn btn-outline-light w-100" href="/">
                      
                    </a>
                  </div>

                  <div className=" position-relative text-center">
                    <p className="text-sm font-weight-bold mb-1 text-danger text-border d-inline z-index-2 bg-white px-3">
                      or
                    </p>
                  </div>

                </div>

                <div className="card-body">

                  <SignInForm/>

                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer py-2">
        <div className="container">
          
          <div className="row">
            <div className="col-lg-8 mb-4 mx-auto text-center">
              
              <a href="/" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                About
              </a>
              <a href="/" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                Customer support
              </a>
              
            </div>
            <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
              <a href="/" target="_blank" className="text-secondary me-xl-4 me-4">
                <span className="text-lg fab fa-dribbble"></span>
              </a>
              <a href="/" target="_blank" className="text-secondary me-xl-4 me-4">
                <span className="text-lg fab fa-twitter"></span>
              </a>
              <a href="/" target="_blank" className="text-secondary me-xl-4 me-4">
                <span className="text-lg fab fa-instagram"></span>
              </a>
              <a href="/" target="_blank" className="text-secondary me-xl-4 me-4">
                <span className="text-lg fab fa-pinterest"></span>
              </a>
              <a href="/" target="_blank" className="text-secondary me-xl-4 me-4">
                <span className="text-lg fab fa-github"></span>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-8 mx-auto text-center mt-1">
              <p className="mb-0 text-secondary">
                Copyright © <script>
                  document.write(new Date().getFullYear())
                </script> Dsoftsolutions.
              </p>
            </div>
          </div>

        </div>
      </footer>

    </>
  )
}

export default SignIn