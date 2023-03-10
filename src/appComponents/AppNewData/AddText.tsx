import { TextField } from '@mui/material'
import React, { useState } from 'react'
import useOpenClose from '../../hooks/useOpenClose'
import AppButton from '../../shared/AppButton'
import { pasteFromClipbaord } from '../../utils'
import AppBox from '../AppBox'

interface Props {
  cb: (v: string) => void
}
export default function AddText(p: Props) {
  const [value, setValue] = useState('')
  const newParser = useOpenClose()
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const onSave = () => {
    p.cb(value)
  }
  const pasteData = async () => {
    const d = await pasteFromClipbaord()
    setValue(d)
  }
  return (
    <AppBox stack>
      <AppBox>
        <AppButton tooltip='Paste Data' iconOnly icon='paste' cb={pasteData} props={{ color: 'success' }} />
        <AppButton tooltip='Build Data Parser' iconOnly icon='build' cb={pasteData} props={{ color: 'success' }} />
        <AppButton tooltip='Build Data Parser' iconOnly icon='save' cb={onSave} props={{ color: 'success', disabled: value === '' }} />
      </AppBox>
      <TextField
        fullWidth
        multiline
        minRows={3}
        value={value} onChange={onChange} label="Paste Text Here..." />
    </AppBox>
  )
}
