import { Scale } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { SidebarMode, SidebarPinnedOpen } from '../store'
import Icons from './Icons'

export default function SidebarToggle() {
    const [sideBarMode, setSideBarMode] = useRecoilState(SidebarMode)
    const [sideBarPinned, pinSidebar] = useRecoilState(SidebarPinnedOpen)
    const toggle = () => {
        if (sideBarMode === 'full' ) {
            setSideBarMode('icon')
            sideBarPinned && pinSidebar(false)
        } else  {
            setSideBarMode('full')
        }
    }
    const pinSidebarOpen = () => {
        setSideBarMode('full')
        pinSidebar(true)
    }
  return (
    <>
    { sideBarMode === 'full' && <IconButton onClick={pinSidebarOpen}>
        <Icons size="small" type="pin"/>
    </IconButton>}
    <IconButton onClick={toggle}>
        <Icons type="menuToggle" sx={{
            transform: sideBarMode === 'icon' ? 'scaleX(-1)' : 'scaleX(1)'
        }} />
    </IconButton>
        </>
  )
}
