import { TextField } from '@mui/material'
import { arrayMoveImmutable } from 'array-move'
import React, { useState } from 'react'
import { Draggable } from 'react-drag-reorder'
import { AppParserConfig, OnChangeHandler } from '../AppTypes'
import useInput from '../hooks/useInput'
import useOpenClose from '../hooks/useOpenClose'
import AppButton from '../shared/AppButton'
import { lightBorder } from '../styling'
import AppBox from './AppBox'
import AppDialog from './AppDialog'
import AppEditValue from './AppEditValue'
import AppList from './AppList'
import AppListReorder from './AppListReorder'
const blankParser = {parser: null, backups: []}
const renderParser  = ({data, index}: {data: string, index: number}) => {
    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState(data)
    const toggleEdit = () => {
        setEdit(!edit)
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    } 
    const saveChange = () => {

    }
    return (
        <AppBox flx sx={{...lightBorder('bottom'), p: 1}}>
            <AppBox grow>
                {edit ?
                <TextField fullWidth size="small" value={value} onChange={onChange}/>
                :new RegExp(data).toString()}
            </AppBox>
            <AppBox flx>
                <AppButton iconOnly icon={edit ? 'close' : 'edit'} cb={toggleEdit} props={{color: edit ? 'error' : 'primary', size: 'small'}} />
                <AppButton iconOnly icon="save" cb={saveChange} props={{color: 'success', disabled: !edit || value === data}} />
            </AppBox>
        </AppBox>
    )
}
export default function AppParser() {
    const [parsers, setParsers] = useState<string[]>([])
    const [parserConfig, setParser] = useState<string>('')
    const newParser = useOpenClose()
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParser(e.target.value)
    }
    const cancel = () => {
        setParser('');
        newParser.onClose()
    }
    const add = () => {
        setParsers(curr => {
            return [...curr, parserConfig]
        })
        setParser('')
    }
    const updateParser = (value: string, index:number) => {

    }
    const getChangedPos = (currentPos: any, newPos: any) => {
        const newArray = arrayMoveImmutable(parsers, currentPos, newPos);
        setParsers(newArray)
    };
    return (
        <AppBox stack>
            <AppBox>
                <AppButton text='Add' icon="add" cb={newParser.onOpen} props={{ variant: "contained", color: 'success', size: "small" }} />
            </AppBox>
            <AppBox sx={{ p: 1 }}>
              <AppList data={parsers} render={renderParser}/>
            </AppBox>
            <AppDialog title="Parsers" open={newParser.open} onClose={newParser.onClose}
                actions={<AppBox flx spread sx={{ p: 1 }}>
                    <AppButton text='Cancel' icon="close" cb={cancel} props={{ variant: "contained", color: 'error', size: "small" }} />
                    <AppButton text='Add' icon="save" cb={add} props={{ variant: "contained", color: 'success', size: "small", disabled: parserConfig === '' }} />
                </AppBox>}>
                <AppBox stack>
                    <TextField label="Parser" value={parserConfig} onChange={onChange} />
                </AppBox>
            </AppDialog>
        </AppBox>
    )
}
