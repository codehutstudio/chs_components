import React, { useEffect, useState } from 'react'
import { Draggable } from 'react-drag-reorder'
import AppBox from './AppBox'

export default function AppListReorder(p: {
    data: any[]
}) {
  const [data, setData] = useState(p.data)
  useEffect(() => {
    if(p.data.length !== data.length) {
      setData(p.data)
    }
  }, [p.data])
  
  if (p.data.length > 0) return null
  return (
    <Draggable onPosChange={(a, b) => console.log(a, b)}>
        {data.map((child, idx) => <AppBox key={idx}>{child}</AppBox>)}
    </Draggable>
  )
}
