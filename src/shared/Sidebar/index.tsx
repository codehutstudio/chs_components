import { Box } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { SidebarMode, SidebarPinnedOpen } from '../../store'
interface Props {
  children: React.ReactNode
}
export default function Sidebar({children}: Props) {
  const [sidebarMode, setSideBarMode] = useRecoilState(SidebarMode)
  const [hasHovered, setHasHovered] = useState(false)
  const sideBarPinned = useRecoilValue(SidebarPinnedOpen)
  const ref = useRef(null)
  const widths = useRef({
    full: '250px',
    icon: '60px',
    offscreen: 0
  })
  const handleMouseEnter = () => {
    if(sidebarMode === 'icon') {
      setHasHovered(true)
      setSideBarMode('full')
    }
  }
  const handleMouseLeave = () => {
    if(hasHovered && !sideBarPinned) {
      setSideBarMode('icon')
      setHasHovered(false)
    } 
  }
  return (
    <Box 
    ref={ref}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    sx={{
      width: widths.current[sidebarMode],
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      transition: 'width 0.3s ease-in-out',
      bgcolor: '#ffffff',
      zIndex: 1200,
      borderRight: '1px solid rgba(0,0,0,0.12)'
    }}>
      {children}
    </Box>
  )
}
