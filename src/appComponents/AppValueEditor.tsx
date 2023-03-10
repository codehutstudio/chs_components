import { TextField } from '@mui/material';
import React, { useState } from 'react'
import AppButton from '../shared/AppButton';
import { pasteFromClipbaord } from '../utils';
import AppBox from './AppBox';

export default function AppValueEditor(p: {
  value: string | number;
  name: string;
  onChange: (v: any) => void;
  onSave: () => void
}) {
  const [value, setValue] = useState(p.value)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const onSave = () => {
    p.onChange(value)
    p.onSave()
  }
  const clear = () => {
    setValue('')
  }
  const fromClipboard = async () => {
    const d = await pasteFromClipbaord()
    setValue(d)
  }
  return (
    <AppBox stack sx={{width: '300px'}}>
      <AppBox pl={2} flx grow end>
        <AppButton icon="paste" props={{ size: 'small', color: 'primary' }} iconOnly cb={fromClipboard} />
        <AppButton icon="clear" props={{ size: 'small', color: 'error' }} iconOnly cb={clear} />
        <AppButton icon="save" props={{ size: 'small', color: 'success' }} iconOnly cb={onSave} />
      </AppBox>
      <AppBox>
        <TextField size="small" variant='outlined' fullWidth value={value} label={p.name} onChange={handleChange} />
      </AppBox>
    </AppBox>
  )
}
