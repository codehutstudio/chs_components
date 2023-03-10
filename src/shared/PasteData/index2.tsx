import { Box, Button, Divider, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'
import { handleEvent } from '../../AppFunctions'
import { KeyedValue } from '../../AppTypes';
import { flexStack, lightBorder } from '../../styling';
import Icons from '../Icons';
import Entries from './Entries';

export default function PasteData({ onPaste, label, maxRows = 5 }: { maxRows?: number; label?: string; onPaste: (data: any) => void }) {
    const [delimiter, setDelimiter] = useState<string>('-')
    const [dataType, setDataType] = useState('string')
    // const [entries, setEntries] = useState<KeyedValue[]>([])
    const [value, setValue] = useState('')
    const [parsers, ] = useState([
        '\n\n\s{2,}',
        '\n'
    ])
    const handler = handleEvent((data: any) => {
        setValue(data)
    })
    const clear = () => {
        setValue('')
    }
    // const clearEntries = () => {
    //     setEntries([])
    // }
    const paste = async () => {
        const text =  await navigator.clipboard.readText()
        setValue(text)
    }
    const parse = () => {
        const r = parsePastedData(value, parsers)
        onPaste(r)
        clear()
    }
    return (
        <Box sx={{ ...flexStack }}>
            <Box sx={{...lightBorder('bottom'), display: 'flex', mb: 2, p: 1}}>
                <IconButton><Icons type="moreVert" /></IconButton>
                <Divider orientation="vertical" flexItem/>
            </Box>
            <Box>
                <TextField multiline fullWidth maxRows={maxRows} label={label ? label : 'Paste Data'} value={value} onChange={handler} />
                <Box>
                    <Button onClick={clear}>Clear</Button>
                    <Button onClick={paste}>Paste</Button>
                    <Button onClick={parse}>Parse</Button>
                </Box>
            </Box>
            {/* <Entries data={entries} clear={clearEntries}/> */}
        </Box>
    )
}

function parsePastedData(d: string, parsers: string[]) {
    const parser = new RegExp(parsers[0])
    const entries = d.split(/\n\n\s{2,}/).map(parseEntry(parsers))
    return entries
}
const parseEntry = (parsers: string[]) => (d: string) => {
    const parser = new RegExp(parsers[1])
    const lines = d.split(parser).filter(line => line !== '')
    let record: KeyedValue = {}
    let count = 0
    for (const line of lines) {
        if (line === "") {
            continue
        }
        const r = /^(?<key>[^-]*)-?(?<value>(.*)$)/.exec(line)
        if (r && 'groups' in r) {
            if (!r.groups?.value && count === 0) {
                record.Name = r.groups?.key.trim()
                continue
            }
            const { key, value } = r.groups as any
            if (!value) {
                record[count] = `${key}`
            }
            record[key] = value.trim()
        }
        count++
    }
    return { ...record, Notes: [] }
}