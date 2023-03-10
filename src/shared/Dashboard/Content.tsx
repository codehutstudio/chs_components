import { Box } from '@mui/material'
import React, { ReactNode, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { SidebarPinnedOpen } from '../../store'

export default function Content({mode, children}: {mode: string, children: ReactNode}) {
  const sideBarPinned = useRecoilValue(SidebarPinnedOpen)
  const [sidebarMargin, setSidebarMargin] = useState<number | string>(0)
  useEffect(() => {
    if (mode === 'full' && !sideBarPinned) setSidebarMargin(0)
    if (mode === 'full' && sideBarPinned) setSidebarMargin('250px')
    if (mode === 'icon') setSidebarMargin('60px')
  }, [mode, sideBarPinned])
  return (
    <Box sx={{
        ml: sidebarMargin,
        mt: '60px',
        height: '100%',
        transition: 'margin 0.3ms ease',
        p: 1,
        // overflow: 'scroll',
    }}>{children}</Box>
  )
}
