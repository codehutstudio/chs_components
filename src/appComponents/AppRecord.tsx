import { camelCase } from 'change-case'
import React, { useState } from 'react'
import { AppInputConfig, KeyedValue } from '../AppTypes'
import { replaceAt } from '../utils'
import AppBox from './AppBox'
import AppKeyValueEditor from './AppKeyValueEditor'

interface Props {
    keys: AppInputConfig[]
}
export default function AppRecord(p: Props) {
    const [record, setRecord] = useState(p.keys.reduce(build, []))
    const cb = (v: KeyedValue) => {
        setRecord((curr: KeyedValue[]) => {
            const selected = curr[v.index]
            const updatedValue = {...selected, ...v}
            const updatedRecord = replaceAt(updatedValue, curr, v.index)
            return updatedRecord
        })
    }
    return (
        <AppBox stack>
            {record
                .map((rc: AppInputConfig, idx) => (
                    <AppKeyValueEditor key={idx} index={idx} valueKey={rc.name} value={rc.value || ''} cb={cb} />
                ))}
        </AppBox>
    )
}
function build(list: AppInputConfig[], curr: AppInputConfig) {
    const { name, type, label, value } = curr
    list = [...list, 
        {
        name: camelCase(name),
        label: label || name,
        value: value || '',
        type: type || typeof value
    } ]
    return list
}