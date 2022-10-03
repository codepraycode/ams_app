import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ label, link, ...rest}) => {

    const pprops = {
        type:"button",
        className: "btn bg-gradient-dark w-100 my-4 mb-2",
        ...rest
    }

    if(Boolean(link)) {
        return ( <a href={link} {...pprops}>
            {label}
        </a>)
    }
    
    
    return (
        <button {...pprops}>
            {label}
        </button>
    )
}

export default Button