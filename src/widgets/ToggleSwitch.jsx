import React from 'react'

const ToggleSwitch = ({ label }) => {
    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="rememberMe" checked readOnly/>
            <label className="form-check-label" htmlFor="rememberMe">{label}</label>
        </div>
    )
}

export default ToggleSwitch;