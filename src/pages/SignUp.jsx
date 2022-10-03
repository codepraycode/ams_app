import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInUrl } from '../constants/app_urls';

import { curve1 } from '../constants/assets';


import Input from '../widgets/Input';
import Form from '../widgets/Form';
import Checkbox from '../widgets/Checkbox';
import Button from '../widgets/Button';

import { associationSignUpFormConfig } from '../constants/form_configs';
import FileUpload from '../widgets/FileUpload';
import Pager from '../widgets/Pager';
import Footer from '../components/Footer';



const SignInForm = () =>{
  const navigate = useNavigate();
  return (
    <Form className="form text-left" onSubmit={(e)=>{e.preventDefault(); navigate(signInUrl)}}>
      <FileUpload 
        inputProps={associationSignUpFormConfig.logo}
      />

      <Input inputProps={associationSignUpFormConfig.association_reg_id}/>
      <Input inputProps={associationSignUpFormConfig.name}/>


      {/* <Checkbox 
        label={
          <>
            I agree the <a href="/" className="text-dark font-weight-bolder">Terms and Conditions</a>
          </>
        }
      /> */}


      <Button type="submit" label={"Next"}/>

      

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

                <Pager row={3}/>

                <p className="error">
                  {null}
                </p>

                <div className="card-body mt-0">

                  <SignInForm/>


                  <p className="text-sm mt-3 mb-0">
                    Already have an account?  <Link
                      to={signInUrl}
                      className="text-dark font-weight-bolder">
                      Sign in
                    </Link>
                  </p>

                </div>
                
              </div>
            </div>
          </div>
        </div>

      </section>

      <Footer/>

    </>
  )
}

export default SignIn