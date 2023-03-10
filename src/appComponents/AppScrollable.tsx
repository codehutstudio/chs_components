import { Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
interface Props {
    children: React.ReactNode
}
export default function AppScrollable({children}: Props) {
  return (
    <Box className="scrollable" sx={{height: '100%', width: '100%', overflowY: 'scroll'}}>{children}</Box>
  )
}
