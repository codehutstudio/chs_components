import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import { flex, flexStack } from '../../styling';
import AppButton from '../AppButton';
interface Props {
    minRows?: number;
    label?: string;
    cb: (data: any) => void;
    value: any;
}
export default function PasteData({ value, cb, label, minRows = 1 }: Props) {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        cb(e.target.value)
    }
    const autoPaste = async () => {
        const text = await navigator.clipboard.readText()
        cb(text)
    }
    const clear = () => {
        cb('')
    }
    return (
        <Box sx={{ ...flexStack }}>
            <Box sx={{ p: 1, ...flex, justifyContent: 'flex-end' }}>
                <Box>
                    <AppButton props={{
                        size: 'small',
                        color: 'primary'
                    }}
                        icon='paste'
                        iconProps={{ fontSize: '1rem' }}
                        iconOnly={true} cb={autoPaste}
                        tooltip="paste"
                    />
                </Box>
                <Box>
                    <AppButton props={{
                        size: 'small',
                        color: 'error'
                    }}
                        icon='clear'
                        iconProps={{ fontSize: '1rem' }}
                        iconOnly={true} cb={clear}
                        tooltip="clear" />
                </Box>
            </Box>
            <Box sx={{ width: '100%' }}>
                <TextField
                    fullWidth
                    minRows={minRows}
                    label={label ? label : 'Paste Data'}
                    value={value}
                    onChange={onChange}
                />
            </Box>
        </Box>
    )
}
