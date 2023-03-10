import { Box, useTheme } from '@mui/material'
import React, { useState } from 'react'
import useOpenClose from '../../hooks/useOpenClose'
import { childrenSpace, cover, flex, flexStack, lightBorder } from '../../styling'
import AppButton from '../AppButton'
import AppModal from '../AppModal'
import DataEditor from '../DataEditor'
import PasteData from '../PasteData'
interface Props {
    parser: (data: any) => any
}

export default function AddData({ parser }: Props) {
    const theme = useTheme()
    const pasteDialog = useOpenClose()
    const buildDialog = useOpenClose()
    const [data, setData] = useState(null)
    const [pastedData, setPastedData] = useState('')
    const onPaste = () => {
        pasteDialog.onClose()
        setData(parser(pastedData))
    }
    const onBuild = () => { }
    return (
        <Box sx={{ ...flexStack, ...cover , m:1}} className="AddData">
            <Box sx={{ ...flex, ...lightBorder(), borderRadius: '5px' }}>
                <Box sx={{ flexBasis: '50%' }}>

                </Box>
                <Box sx={{ ...flex, justifyContent: 'flex-end', flexBasis: '50%', p: theme.spacing(1) }}>
                    <AppButton props={{
                        variant: 'contained',
                        color: 'primary',
                        size: 'small',
                        sx: { ml: 1 }
                    }} cb={pasteDialog.onOpen} icon="paste" text="Paste" iconOnly={true} tooltip="Paste Data" />
                    <AppButton props={{
                        variant: 'contained',
                        color: 'primary',
                        size: 'small',
                        sx: { ml: 1 }
                    }} cb={buildDialog.onOpen} icon="build" text="Build" iconOnly={true} tooltip="Build Data" />
                </Box>
            </Box>
            <DataEditor data={data} />
            <AppModal styles={{ p: 0 }} open={pasteDialog.open} onClose={pasteDialog.onClose}>
                <Box sx={{ p: theme.spacing(1), ...flexStack }}>
                    <PasteData cb={setPastedData} value={pastedData} />
                    <Box sx={{ width: '100%', ...flex, ...lightBorder('top'), mt: 2, pt: 2, justifyContent: 'space-between' }}>
                        <AppButton
                            text='Cancel'
                            icon='delete'
                            props={{
                                size: 'small',
                                color: 'error',
                                variant: 'outlined'
                            }}
                            cb={pasteDialog.onClose}
                        />
                        <AppButton
                            text='Save'
                            icon="save"
                            props={{
                                size: 'small',
                                color: 'success',
                                variant: 'contained'
                            }}
                            cb={onPaste}
                        />
                    </Box>
                </Box>
            </AppModal>
            <AppModal open={buildDialog.open} onClose={buildDialog.onClose}>
                <Box>Build</Box>
            </AppModal>
        </Box>
    )
}
