import React from 'react'

const ToggleSwitch = ({ label }) => {
    return (
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="rememberMe" checked readOnly/>
            <label class="form-check-label" htmlFor="rememberMe">{label}</label>
        </div>
    )
}

export default ToggleSwitch;