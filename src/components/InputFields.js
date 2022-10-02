import React, { useState } from 'react'


function InputFields(props) {
  const [focused, setFocused] = useState(false)
  const { label, error_message, onChange, ...otherinput } = props;

  function handlefocus(){
    setFocused(true)
  }

  return (

    <div style={{
      margin: '30px 30px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <label>{label}</label>
      <input {...otherinput} onChange={onChange} onBlur={handlefocus} focused={focused.toString()} />
      <span>{error_message}</span>
    </div>
  )
}

export default InputFields