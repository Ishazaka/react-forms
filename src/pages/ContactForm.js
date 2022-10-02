import React, {useState} from 'react'
import InputFields from '../components/InputFields'

const ContactForm = () => {
  const [formValues, setFormValues] =  useState({
    firstname: '',
    lastname: '',
    email: '',
    birthday: '',
    password: '',
    confirmpassword: ''
  })
   const formInputs = [
    {
        id: 1,
        type: 'text',
        name: 'firstname',
        placeholder: 'First Name',
        error_message: 'Name must be in between 3-14 characters',
        label: 'First Name',
        pattern: '^[A-Za-z0-9]{3,14}$',
        required: true
    },
    {
        id: 2,
        type: 'text',
        name: 'lastname',
        placeholder: 'Last Name',
        error_message: 'Name must be in between 3-14 characters',
        label: 'Last Name',
        pattern: '^[A-Za-z0-9]{3,14}$',
        required: true
    },
    {
        id: 3,
        type: 'email',
        name: 'email',
        placeholder: 'Email',
        error_message: 'Email is invalid',
        label: 'Email',
        required: true
    },
    {
        id: 4,
        type: 'date',
        name: 'birthday',
        placeholder: 'Birth day',
        label: 'Birth Date',
        required: true
    },
    {
        id: 5,
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        error_message: 'password must include 1 special char, 1 uppercase , 1 lowercase and 1 number',
        label: 'Password',
        pattern : "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$",
        required: true
    },
    {
        id: 6,
        type: 'password',
        name: 'confirmpassword',
        placeholder: 'confirm Password',
        error_message: 'password must be same',
        pattern: formValues.password ,
        label: 'Confirm Password',
        required: true
    }
    
   ]
   function onChange(e){
   const {value , name} = e.target;
   setFormValues({...formValues , [name] : value})
   }

   console.log(formValues)

   function handlesubmit(e){
    e.preventDefault();
   }

  return (
       <>
  
    <div className='form-box'>
        <div className='form-container'>
    <h1>React Form</h1>
        <form onSubmit={handlesubmit}>
            {formInputs.map((input) => (
         <InputFields key={input.id} {...input} onChange={onChange} value={formValues[formInputs.name]}/>
            ))}
     
     <div className='btn-div'>
     <button className='form-btn'>Sumbit</button>
     </div>
    
        </form>
        </div>
    </div>
    </>
  )
}

export default ContactForm