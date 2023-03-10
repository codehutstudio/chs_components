import { Box, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'
import { KeyedValue } from '../AppTypes';
import { centerAll, flex, stack } from '../styling';
import AppButton from './AppButton';
import Icons from './Icons';

export default function KeyValueEditor({ objKey, value, type = 'both', cb }: { objKey: string; value: any; type?: 'key' | 'value' | 'both'; cb: (obj: KeyedValue) => void }) {
    const [keyCopy, setKeyCopy] = useState(objKey)
    const [valueCopy, setValueCopy] = useState(value)
    const [previousKey, setPreviousKey] = useState('')
    const [previousValue, setPreviousValue] = useState('')
    const onChange = (editType: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (editType === 'key') {
            setPreviousKey(keyCopy)
            setKeyCopy(e.target.value)
        }
        else {
            setPreviousValue(valueCopy)
            setValueCopy(e.target.value)
        }
    }
    const onSave = () => {
        cb({ [keyCopy]: valueCopy })
    }
    const pasteData = (key: string) => async () => {
        const text = await navigator.clipboard.readText();
        if (key === 'key') { setPreviousKey(keyCopy); setKeyCopy(text) };
        if (key === 'value') { 
            setPreviousValue(valueCopy); 
            setValueCopy(text) };
    }
    const undoPasteData = (key: string) => () => {
        if (key === 'key') {
            setKeyCopy(previousValue)
        } else {
            setValueCopy(previousValue)
        }
    }
    return (
        <Box sx={{ ...flex, ...stack }}>
            <Box sx={{ width: '100%' }}>
                {(type === 'both' || type === 'key') && (
                    <Box sx={{ p: 1, display: 'flex' }}>
                        <TextField size="small" fullWidth label="Key" value={keyCopy} onChange={onChange('key')} />
                        <Box sx={{ ...flex, alignItems: 'center', p: '5px' }}>
                            <IconButton size="small" onClick={pasteData('key')}>
                                <Icons sx={{ fontSize: '1rem' }} size="small" type="paste" />
                            </IconButton>
                            <IconButton disabled={previousKey === ''} size="small" onClick={undoPasteData('key')}>
                                <Icons sx={{ fontSize: '1rem' }} size="small" type="undo" />
                            </IconButton>
                        </Box>
                    </Box>)}
                {(type === 'both' || type === 'value') && (
                    <Box sx={{ p: 1, display: 'flex' }}>
                        <TextField size="small" fullWidth label="Value" value={valueCopy} onChange={onChange('value')} />
                        <Box sx={{ ...flex, ...centerAll, p: '5px' }}>
                            <IconButton size="small" onClick={pasteData('value')}>
                                <Icons sx={{ fontSize: '1rem' }} size="small" type="paste" />
                            </IconButton>
                            <IconButton disabled={previousValue === ''} size="small" onClick={undoPasteData('value')}>
                                <Icons sx={{ fontSize: '1rem' }} size="small" type="undo" />
                            </IconButton>
                        </Box>
                    </Box>)}
            </Box>
            <Box>
                <AppButton icon='save' text="Save" props={{
                    color: 'success',
                    variant: 'contained',
                    size: 'small'
                }} cb={onSave} />
            </Box>
        </Box>
    )
}
