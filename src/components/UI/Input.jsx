import { TextField } from '@mui/material'
import React from 'react'

const Input = ({ type = "text", onChange, variant  , value, placeholder, ...rest  }) => {
  return <TextField type={type} onChange={onChange} value={value} variant={variant} placeholder={placeholder}{...rest}/>
}

export default Input
