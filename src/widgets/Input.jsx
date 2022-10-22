import React from 'react'

const Input = ({ inputProps, wrapperProps, editing, onChange }) => {


    let formRegister = onChange 

    if(!formRegister){
      formRegister = () => { };
    }
  
    const pprops = {
      className: "form-group" + (editing ? " edit" :''),
        ...wrapperProps
    }


    const inpProps = {
        type:"text",
        className:"form-control",
      ...inputProps,
    }

    return (
      <div {...pprops}>

        <input 
          {...inpProps} 
          onChange={(e)=>{
            e.preventDefault();

            formRegister(parseInt(e.target.value));
          }}
        />
        {inputProps.label && <label>{inputProps.label}</label>}

      </div>
        
    )
}

export default Input