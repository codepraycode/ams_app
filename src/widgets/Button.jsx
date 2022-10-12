import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ label, link, variant, size, ...rest}) => {

    const btnSize = size ? "btn-" + size : '';
    const btnVariant = variant || '';

    const pprops = {
        type:"button",
        className: `btn ${btnVariant} ${btnSize}`.trim(),
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