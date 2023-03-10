import { Box, styled, Toolbar } from '@mui/material'
import { BoxProps } from '@mui/system'
import React, { useRef, useState } from 'react'
import { KeyedValue, SidebarLink } from '../../AppTypes'
import AppBox from '../../appComponents/AppBox'
import AppContent from '../../appComponents/AppContent'
import AppHeader from '../../appComponents/AppHeader'
import AppSidebar from '../../appComponents/AppSidebar'
import AppWrapper from '../../appComponents/AppWrapper'
import { cover, coverFlex, flexStack, lightBorder } from '../../styling'
import AppButton from '../AppButton'
import { Outlet } from 'react-router-dom'
import { NavigationLink } from '../../AppTypes'
import AppBreadcrumbs from '../../appComponents/AppBreadcrumbs'
interface Props {
  links: NavigationLink[]
}
export default function Dashboard(p: Props) {
  const [sidebarMode, setSidebarMode] = useState<'icon' | 'full' | 'offScreen'>('full')
  const [viewMode, setViewMode] = useState('')
  const toggleSidebar = () => {
    sidebarMode === 'icon' ? setSidebarMode('full') : setSidebarMode('icon')
  }
  const setMode = ({ name }: SidebarLink) => {
    setViewMode(name)
  }
  const sidebarStyles = useRef({

  })
  return (
    <AppWrapper sx={{ ...flexStack, ...lightBorder(), overflow: 'hidden' }}>
      <AppBox sx={{ ...lightBorder('bottom'), height: '64px' }}>
        <AppBox sx={{ ...coverFlex }}>
          <Toolbar>
            <AppButton props={{
              size: 'small',
              edge: 'start',
            }} cb={toggleSidebar} iconOnly={true} icon="menuToggle" />
          </Toolbar>
        </AppBox>
      </AppBox>
      <AppBox flx grow>
        <AppBox sx={{ ...lightBorder('right') }}>
          <AppSidebar links={p.links} mode={sidebarMode} cb={setMode} />
        </AppBox>
        <AppBox cover stack>
          <AppBox coverX p={10} sx={{ ...lightBorder('bottom') }}>
            <AppBreadcrumbs />
          </AppBox>
          <AppBox cover>
            <Outlet />
          </AppBox>
        </AppBox>
      </AppBox>
      {/* <AppHeader sx={{...lightBorder('bottom')}}>
        <AppBox sx={{...coverFlex}}>
          <Toolbar>
          <AppButton props={{
            size: 'small',
            edge: 'start',
            }} cb={toggleSidebar} iconOnly={true} icon="menuToggle"/>
          </Toolbar>
        </AppBox>
        </AppHeader> */}
      {/* <AppContent sidebar={<AppSidebar links={p.links} mode={sidebarMode} cb={setMode} />}>
        <AppBox coverX p={10} sx={{ ...lightBorder('bottom') }}>
          <AppBreadcrumbs />
        </AppBox>
        <Outlet />
      </AppContent> */}
    </AppWrapper>
  )
}
