import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SidebarLink } from '../../AppTypes'
import Icons from '../../shared/Icons'
interface Props extends SidebarLink {
  cb: (val?: any) => void 
}
export default function AppSidebarLink({name, to, icon, cb}: Props) {
  const go = useNavigate()
  const onClick = () => {
    go(name.toLowerCase())
  }
  return (
    <ListItemButton onClick={onClick}>
      <ListItemIcon>
        <Icons type={icon || name.toLowerCase()} />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  )
}
