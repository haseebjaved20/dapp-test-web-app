import React from "react";

const InputField = (props) => {
  const {
    name,
    type,
    placeholder,
    error,
    label,
    onChange,
    value,
    touched,
    onBlur,
  } = props;
 
  return (
    <div className={`mb-6`}>
      <label className={`text-xs text-black `}>{label}</label>
      <input
        name={name}
        className={` inputFieldStyle `}
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />

      {error && touched && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default InputField;
