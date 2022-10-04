import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ label, link, ...rest}) => {

    const pprops = {
        type:"button",
        className: "btn",
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