import React from "react";

const Input = ({ label, type="text", value, onChange, error, name }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <input 
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={`${name}-error`}
      />

      {error && <p className="error" id={`${name}-error`}>{error}</p>}
    </div>
  );
};

export default Input;
