import { Box } from '@mui/material'
import React from 'react'

export default function Brand({height = '64px'}: {height?: string}) {
  return (
    <Box sx={{
        height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>Brand</Box>
  )
}
