import { Box } from '@mui/material'
import React, { cloneElement, useEffect, useRef, useState } from 'react'

export default function AppWithParent({ children }: any) {
    const [state, setState] = useState({})
    const ref = useRef(null)
    useEffect(() => {
      if(ref) {
        const { clientHeight, clietWidth} = ref.current as any
        setState({height: clientHeight, width: clietWidth})
    }
    }, [ref])
    return (
        <Box className="childWrapper" ref={ref} sx={{height: '100%', width: '100%'}}>{cloneElement(children, state)}</Box>
    )
}
