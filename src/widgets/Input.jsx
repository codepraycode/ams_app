import React from 'react'

const Input = ({inputProps, wrapperProps}) => {

    const pprops = {
      className: "form-group",
        ...wrapperProps
    }

    const inpProps = {
        type:"text",
        className:"form-control",
        ...inputProps,
    }

    return (
      <div {...pprops}>

        <input {...inpProps} />
        {inputProps.label && <label>{inputProps.label}</label>}

      </div>
        
    )
}

export default Input