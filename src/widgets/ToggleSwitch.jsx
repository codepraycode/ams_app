import React from 'react'

const ToggleSwitch = ({ label, wrapperProps}) => {
    const {className:wrapperClassName, ...restWrapperProps} = wrapperProps;

    const pprop = {
        className:"form-check form-switch" + (wrapperClassName || ''),
        ...wrapperProps
    }
    return (
        <div {...pprop}>
            <input className="form-check-input" type="checkbox" id="rememberMe" checked readOnly/>
            <label className="form-check-label" htmlFor="rememberMe">{label}</label>
        </div>
    )
}

export default ToggleSwitch;