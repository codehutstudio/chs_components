import { Divider, TextField, useTheme} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { KeyedValue } from '../AppTypes';
import AppButton from '../shared/AppButton';
import AppBox from './AppBox'
interface Props {
  valueKey: string;
  value: number | string | boolean;
  cb: (val: KeyedValue) => void;
  index?: number
}
export default function AppKeyValueEditor(p: Props) {
  const theme = useTheme()
  const [edit, setEdit] = useState(false)
  const [key, setKey] = useState(p.valueKey)
  const [value, setValue] = useState(p.value)
  const toggleEdit = () => {
    setEdit(!edit)
  }
  const onSave = () => {
    toggleEdit()
    p.cb({ name: key, value, index: p.index})
  }
  return (
    <AppBox flx cmX={10} p={theme.spacing(1)}>
      <AppBox flx><TextField variant='standard' label="Key" size="small" disabled={!edit} value={key} onChange={(e) => setKey(e.target.value)} /></AppBox>
      <AppBox flx><TextField variant='standard' label="Value" size="small" disabled={!edit} value={value} onChange={(e) => setValue(e.target.value)} /></AppBox>
      <Divider orientation='vertical' flexItem />
      <AppBox center>
        <AppButton iconOnly icon={edit ? 'clear' : 'edit'} cb={toggleEdit} props={{ size: 'small', color: edit ? 'error' : 'primary'}} />
        <AppButton iconOnly icon="save" cb={onSave} props={{ size: 'small', color: 'success', disabled: !edit }} />
      </AppBox>
    </AppBox>
  )
}
