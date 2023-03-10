import { Button, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import AppButton from '../../shared/AppButton'
import { lightBorder } from '../../styling'
import { pasteFromClipbaord } from '../../utils'
import AppBox from '../AppBox'
import AppObjectBuilder from '../AppObjectBuilder'
import AddExcel from './AddExcel'
import AddJson from './AddJson'
import AddText from './AddText'

export default function AppNewData(p: {cb: (v: any) => void}) {
    const [dataType, setDataType] = useState('Text')
    const onChange = (event: React.MouseEvent<HTMLElement>,
        newDataType: string,) => {
        setDataType(newDataType)
    }
    const onSave = (action: string) =>  (value: any) => {
        p.cb({action, value})
    }
    const pasteData = async () => {
        const d = await pasteFromClipbaord()
    }
    return (
        <AppBox stack>
            <AppBox sx={{mb: 1}}>
                <ToggleButtonGroup
                color='primary'
                    exclusive
                    value={dataType}
                    onChange={onChange}
                >
                    <ToggleButton value="Text">Text</ToggleButton>
                    <ToggleButton value="JSON">JSON</ToggleButton>
                    <ToggleButton value="Excel">Excel</ToggleButton>
                    <ToggleButton value="Build">Build</ToggleButton>
                </ToggleButtonGroup>
            </AppBox>
            <AppBox>
                {dataType === 'Text' && <AddText cb={onSave('text')}/>}
                {dataType === 'JSON' && <AddJson cb={onSave('json')}/>}
                {dataType === 'Excel' && <AddExcel cb={onSave('excel')}/>}
                {dataType === 'Build' && <AppObjectBuilder cb={onSave('object')} />}
            </AppBox>
        </AppBox>
    )
}
