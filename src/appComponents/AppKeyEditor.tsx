import { TextField } from '@mui/material'
import React, { useState } from 'react'
import AppButton from '../shared/AppButton'
import { arrayDelete, insertAt, replaceAt } from '../utils';
import AppBox from './AppBox'

export default function AppKeyEditor(p: {
    data: string[] | number[];
    onChange: (val: any) => void;
}) {
    const [keys, setKeys] = useState(p.data)
    const [update, setUpdate] = useState('')
    const onChange = (idx: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const update = replaceAt(e.target.value, keys, idx)
        setKeys(update as any)
    }

    const onSave = () => {
        
    }
   
    const onDelete = (index: number) => () => {
        const update = arrayDelete(index, keys)
        setKeys(update)
    }
    return (
        <AppBox stack>
            {keys.map((key, index) => (
                <Editor key={index} value={keys[index]} onChange={onChange(index)} remove={onDelete(index)}/>
            ))}
        </AppBox>
    )
}

const Editor = (p: {
    value: any;
    onChange: (val: any) => void;
    remove: () => void;
}) => {
    const [edit, setEdit] = useState(false)
    const toggleEdit = () => {
        setEdit(!edit)
    }
    return (
        <AppBox flx>
        <AppBox grow><TextField size="small" label="Key" value={p.value} onChange={p.onChange} disabled={!edit} /></AppBox>
        <AppBox center>
            <AppButton iconOnly icon={edit ? "save" : 'edit'} props={{size: 'small', color: edit ? 'success' : 'primary'}} cb={toggleEdit}/>
            <AppButton iconOnly icon="delete" props={{size: 'small', color: 'error'}} cb={p.remove}/>
        </AppBox>
        </AppBox>
    )
}