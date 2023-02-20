import React from 'react'

const InputItems = (props) => {
    const [focused, setFocused] = React.useState(false);
    const { label, errorMessage, onChange, id, ...inputProps} = props;

    const handleFocused = (e) => {
        setFocused(true)
    }
  return (
    <div className='formInput'>
        <label>{label}</label>
        <input {...inputProps} 
            onChange={onChange} 
            onBlur={handleFocused} 
            onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
            focused={focused.toString()}
        />
        <span className='errorSpan'>{errorMessage}</span>

    </div>
  )
}

export default InputItems