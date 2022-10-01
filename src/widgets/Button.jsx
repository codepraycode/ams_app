import React from 'react'

const Button = ({label, ...rest}) => {

    const pprops = {
        type:"button",
        className: "btn bg-gradient-dark w-100 my-4 mb-2",
        ...rest
    }
    
    return (
        <button {...pprops}>
            {label}
        </button>
    )
}

export default Button