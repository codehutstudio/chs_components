import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import useOpenClose from '../hooks/useOpenClose'
import AppButton from '../shared/AppButton'
import { lightBorder } from '../styling'
import { pasteFromClipbaord } from '../utils'
import AppBox from './AppBox'
import AppDialog from './AppDialog'

export default function AppParser2() {
    const [pastedData, setPastedData] = useState('')
    const [processList, setProcessList] = useState<string[]>([])
    const newData = useOpenClose()
    const onDataPasted = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPastedData(e.target.value)
    }
    const pasteClipboardData = async () => {
        const text = await pasteFromClipbaord()
        setPastedData(text)
    }
    const clearPastedData = () => {
        setPastedData('')
    }
    const savePastedData = () => {
        setProcessList(curr => [...curr, pastedData])
        setPastedData('')
    }
    return (
        <AppBox stack cover>
            <AppBox sx={{ ...lightBorder('bottom'), p: 1 }}>
                <AppButton props={{size: 'small'}} iconOnly icon="add" cb={newData.onOpen} />
            </AppBox>
            <AppBox stack>
                <AppDialog title="Add Data" open={newData.open} onClose={newData.onClose}>
                <AppBox flx sx={{...lightBorder('bottom'), p: 1}}>
                    <AppBox centerY grow >
                    <AppButton tooltip='Paste Copied Data' props={{size: 'small', color: 'primary', disabled: pastedData !== ''}} iconOnly icon="paste" cb={pasteClipboardData} />
                    <AppButton tooltip='Clear Pasted Data' props={{size: 'small', color: 'error', disabled: pastedData === ''}} iconOnly icon="clear" cb={clearPastedData} />
                    <AppButton tooltip='Save Pasted Data' props={{size: 'small', color: 'success', disabled: pastedData === ''}} iconOnly icon="save" cb={savePastedData} />
                    </AppBox>
                    <AppBox centerY>
                        <Typography variant='subtitle2' sx={{mr: 1}}>Process Queue:</Typography>
                        <Typography variant='body2'>{processList.length}</Typography>
                    </AppBox>
                </AppBox>
                <AppBox sx={{overflowY: 'scroll',  position: 'relative'}}>
                    <TextField fullWidth multiline minRows={3} value={pastedData} onChange={onDataPasted} size="small" variant='filled' />
                </AppBox>
                </AppDialog>
            </AppBox>
        </AppBox>
    )
}
