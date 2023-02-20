import React from 'react'
import './InputForm.scss'
import InputItems from './InputItems'

const FormInput = () => {
  const [values, setValues] = React.useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should contain AT LEAST 3 characters and should NOT include any special characters!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Lastname",
      errorMessage: "Lastname should contain AT LEAST 3 characters and should NOT include any special characters!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      label: "Lastname",
      required: true
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be valid email address!",
      label: "Email",
      required: true
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least ONE letter, ONE number and ONE special character!",
      label: "Password",
      pattern: "[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password DON'T match! Please try again!",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  console.log(values)
  return (
     <form onSubmit={handleSubmit}>
      <h2 className='registerTitle'>Register Form</h2>
      {
        inputs.map((input) => (
          <InputItems
            key={input.id} 
            {...input} value={values[input.name]} 
            onChange={onChange}
            autoComplete="off"
          />
        ))
      }
      
      
      
    </form>
  )
}

export default FormInput