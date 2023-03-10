import { BoxProps, styled, Box } from '@mui/material'
import React from 'react'

export default function AppContent({children, sidebar}:
     {children: React.ReactNode,
        sidebar?: React.ReactNode}) {
  return (
    <ContentArea>
        {sidebar && <Sidebar>{sidebar}</Sidebar>}
        <Content>{children}</Content>
    </ContentArea>
  )
}
interface ContentAreaProps extends BoxProps {

}
const ContentArea = styled((props: ContentAreaProps) => {
    return <Box {...props} />
  })(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
  }))
interface ContentProps extends BoxProps {

}
  const Sidebar = styled((props: ContentProps) => {
    return <Box  {...props} />
  })(({ }) => ({
    borderRight: '1px solid rgba(0,0,0,0.12)',
  }))
  const Content = styled((props: ContentProps) => {
    return <Box  {...props} />
  })(({ }) => ({
    width: '100%',
    height: '100%',
  }))