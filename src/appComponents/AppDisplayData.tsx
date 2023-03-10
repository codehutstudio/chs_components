import React, { useState } from 'react'
import { KeyedValue } from '../AppTypes'
import { getDataType } from '../utils'
import AppBox from './AppBox'
import AppTable from './AppTable'
import AppWithParent from './AppWIthParent'

export default function AppDisplayData(p:{data: any, headers?: string[] | KeyedValue[], rowId?: string}) {
    const [type, setType] = useState(getDataType(p.data))
  return (
    <AppBox cover className='displayData'>
        {type === 'array' && (
            <AppWithParent className="parent">
                <AppTable data={p.data} headers={p.headers} rowId={p.rowId}/>
            </AppWithParent>
        )}
    </AppBox>
  )
}