import { TextField } from '@mui/material'
import React, { useState } from 'react'

interface Props {
  cb: (v: string) => void
}
export default function AddJson(p: Props) {
  const [value, setValue] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const onSave = () => {
    p.cb(value)
  }
  return (
    <TextField 
    fullWidth
    multiline
    minRows={3}
    value={value} onChange={onChange} label="Paste JSON Here..."/>
  )
}
