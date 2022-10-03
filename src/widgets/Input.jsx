import React from 'react'

const Input = ({inputProps, wrapperProps}) => {

    const pprops = {
        className: "mb-3",
        ...wrapperProps
    }

    const inpProps = {
        type:"text",
        className:"form-control",
        ...inputProps,
    }
  return (
    <>
      {inputProps.label && <label>{inputProps.label}</label>}
      <div {...pprops}>

        <input
          type="text"
          placeholder="Name"
          aria-label="Name"
          aria-describedby="email-addon"
          {...inpProps}
        />
      </div>
    </>
      
  )
}

export default Input