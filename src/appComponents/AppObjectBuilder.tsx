import { Divider, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { KeyedValue } from '../AppTypes'
import AppButton from '../shared/AppButton'
import AppBox from './AppBox'

interface Props {
    cb: (val: KeyedValue) => void
}
export default function AppObjectBuilder(p: Props) {
    const [obj, setObj] = useState({})
    const [key, setKey] = useState('')
    const [value, setValue] = useState('')
    const add = () => {
        setObj(curr => ({ ...curr, [key]: value }))
    }
    const cancel = () => {
        setKey('')
        value !== '' && setValue('')
    }
    const remove = (key: string) => () => {
        const {[key]: selected, ...rest} = obj as any
        setObj(rest)
    }
    const onSave = () => {
        p.cb(obj)
    }
    return (
        <AppBox stack>
            <AppBox flx cmX={10}>
                <AppBox><TextField tabIndex={0} variant='standard' label="Key" size='small' value={key} onChange={(e: any) => setKey(e.target.value)} /></AppBox>
                <AppBox><TextField tabIndex={1} variant='standard' label="Value" size='small' value={value} onChange={(e: any) => setValue(e.target.value)} /></AppBox>
                <Divider orientation='vertical' flexItem />
                <AppBox flx>
                    <AppButton iconOnly icon="save" cb={add} props={{ disabled: key === '', color: 'success' }} />
                    <AppButton iconOnly icon="delete" cb={cancel} props={{ color: 'error', disabled: key === '' }} />
                </AppBox>
            </AppBox>
            <AppBox>
                {Object.entries(obj).map(([key, value], idx) => (
                    <AppBox key={key} flx cmX={10}>
                        <TextField label="Key" disabled variant='standard' value={key} />
                        <TextField label="Value" disabled variant='standard' value={value || " "} />
                        <Divider orientation='vertical' flexItem />
                        <AppBox>
                            <AppButton iconOnly icon="edit" cb={remove(key)} props={{ color: 'error', disabled: key === '' }} />
                            <AppButton iconOnly icon="delete" cb={remove(key)} props={{ color: 'error', disabled: key === '' }} />
                        </AppBox>
                    </AppBox>
                ))}
            </AppBox>
        </AppBox>
    )
}
