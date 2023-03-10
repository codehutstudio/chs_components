import { Button, TextField } from '@mui/material';
import { keys } from '@mui/system'
import React, { useState } from 'react'
import { KeyedValue } from '../AppTypes';
import AppButton from '../shared/AppButton';
import Icons from '../shared/Icons';
import { ArrayProxy, replaceAt } from '../utils';
import AppBox from './AppBox'


interface KeyChangeTracker<T> {
    value: T;
    oldValue: T | null;
    changed: boolean;
}
export default function AppKeysEditor({
    keys, onSave, trackChanges = true
}: {
    keys: string[];
    onSave: (v: any) => void;
    trackChanges?: boolean
}) {
    const [data, setData] = useState(trackChanges ? keys.map((k, i) => ({ value: k, oldValue: null, changed: false })) : keys)

    const update = (i: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        let v: KeyedValue = data[i] as KeyedValue
        if (!v.changed) v = { ...v, changed: true }
        v = { ...v, value: e.target.value }
        const r = replaceAt(v, data, i)
        setData(r)
    }
    const save = () => {
        onSave(data)
    }
    return (
        <AppBox stack>
            {/* {p.keys.map((key, index) => <KeyEditor key={key} value={key} onChange={onChange} index={index} />)} */}
            {data.map((item, index) => (
                <AppBox flx key={index}>
                    <TextField fullWidth size='small' variant='filled' label={`Key ${index}`} value={trackChanges ? (data[index] as KeyChangeTracker<any>).value : data[index]} onChange={update(index)} />
                </AppBox>
            ))}
            <AppBox>
                <Button variant='contained' size="small" color='success' startIcon={<Icons type="save" />} onClick={save}>Save</Button>
            </AppBox>
        </AppBox>
    )
}

const KeyEditor = ({ value: data, onChange, index }: {
    value: string;
    onChange: (v: any) => void;
    index?: number;
}) => {
    const [value, setValue] = useState(data)
    const [removed, setRemoved] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const onSave = () => {
        index ? onChange({ value, index, removed }) : onChange(value)
    }
    const toggleRemoved = () => {
        setRemoved(!removed)
    }
    return (
        <AppBox flx mb={2}>
            <AppBox grow>
                <TextField label="Key" disabled={removed} fullWidth size='small' variant='filled' value={value} onChange={handleChange} />
            </AppBox>
            <AppBox flx>
                <AppBox flx center>
                    <AppButton iconOnly icon={removed ? 'add' : 'close'} props={{ size: 'small', color: removed ? 'warning' : 'error' }} cb={toggleRemoved} />
                </AppBox>
                <AppBox flx center>
                    <AppButton iconOnly icon="save" props={{ size: 'small', color: 'success' }} cb={onSave} />
                </AppBox>
            </AppBox>
        </AppBox>
    )
}