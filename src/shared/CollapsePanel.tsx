import { ExpandMore } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react'
import useOpenClose from '../hooks/useOpenClose';
import { cover, flex, flexStack, lightBorder } from '../styling';
import ExpandAnimated from './Animated/ExpandAnimated';
interface Props {
    children: React.ReactNode;
    title: string
}
export default function CollapsePanel({children, title}:Props) {
 const {open, onClose, toggle } = useOpenClose()
  return (
    <Box sx={{...flexStack, ...lightBorder()}}>
        <Box sx={{width: '100%', ...flex, p: 1}}>
            <Box sx={{flexGrow: 1}}>{title}</Box>
            <ExpandAnimated expand={open} onClick={toggle}>
                <ExpandMore />
            </ExpandAnimated>
        </Box>
        {open && <Box sx={{...cover}}>{children}</Box>}
    </Box>
  )
}
