import React from 'react'

const Checkbox = ({label}) => {
  return (
      <div className="form-check form-check-info text-left">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
              {label}
          </label>
      </div>
  )
}

export default Checkbox