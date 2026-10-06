import React from 'react'

const BeneficialOwnerInfo = ({ label, value, name, errors, handleInputChange }) => {
  return (
    <div className="fieldss">
    <p>{label}</p>
    <input
      type="text"
      value={value}
      className={`${errors[name] ? 'border-danger' : ''}`}
      onChange={handleInputChange}
      name={name}
    />
  </div>
  )
}

export default BeneficialOwnerInfo
