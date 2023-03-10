import { Box } from '@mui/material'
import React, { useState } from 'react'
import { KeyedValue } from '../../AppTypes'
import useParentSize from '../../hooks/useParentSize'
import { cover, flexStack, lightBorder } from '../../styling'
import CollapsePanel from '../CollapsePanel'
import ObjectEditor from '../ObjectEditor'
interface Props {
    data: KeyedValue | KeyedValue[] | null
}
export default function DataEditor({ data }: Props) {
    const [dataType, setDataType] = useState(typeof data)
    const [dataCopy, setDataCopy] = useState(data)
    const [mode, setMode] = useState<'view' | 'edit'>('view')
    const parentRef = useParentSize()
    const updateData = (val: KeyedValue) => {
        debugger
    }
    if (!data) return null
    if (Array.isArray(data)) {
        return (
            <Box className="DataEditor" ref={parentRef.ref} sx={{ ...cover, overflow: 'hidden'}}>
                <Box className="wrapper" sx={{...cover, ...lightBorder(), ...flexStack, borderRadius: '5px', mt: 1, height: parentRef.height}}>
                {data.map((obj, idx) => (
                    <CollapsePanel key={`obj-${idx}`} title={`Entry ${idx + 1}`}>
                    <Box>
                        <ObjectEditor data={obj} onUpdate={updateData} />
                    </Box>
                    </CollapsePanel>
                ))}
                </Box>
            </Box>
        )
    }
    return (
        <div>Object</div>
    )
}
