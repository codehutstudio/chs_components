import { ExpandLess, ExpandMore, StarBorder, } from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail';
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { KeyedValue, NavigationLink } from '../AppTypes'
import { SidebarLinks, SidebarMode } from '../store'
import Icons from './Icons'


export default function SidebarMenu() {
    const links = useRecoilValue<NavigationLink[]>(SidebarLinks)
    const sideBarMode = useRecoilValue(SidebarMode)
    return (
        <List>
            {links.map((link) => {
                if (link.children) return <SubMenuLink key={link.name} link={link} mode={sideBarMode} />
                else return <MenuLink key={link.name}  link={link} mode={sideBarMode} />
            })}
        </List>
    )
}

const MenuLink = ({ link, mode }: { link: NavigationLink, mode: string }) => {
    return (
        <ListItemButton>
            <ListItemIcon>
                <Icons type={link.icon ? link.icon : link.name.toLowerCase()} />
            </ListItemIcon>
            {mode !== 'icon' && <ListItemText primary={link.name} />}
        </ListItemButton>
    )
}
const SubMenuLink = ({ link, mode }: { link: NavigationLink, mode: string }) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <Icons type={link.icon ? link.icon : link.name.toLowerCase()} />
                </ListItemIcon>
                {mode !== 'icon' && <ListItemText primary={link.name} />}
                {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                {mode !== 'icon' && <Icons type={open ? 'less' : 'more'} />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ pl: 4 }}>
                    {link.children?.map(childLink => (
                        childLink.children ?
                            <SubMenuLink key={childLink.name} link={childLink} mode={mode} />
                            : (
                                <ListItemButton key={childLink.name}>
                                    <ListItemIcon>
                                        <Icons type={childLink.icon ? childLink.icon : childLink.name.toLowerCase()} />
                                    </ListItemIcon>
                                    {mode !== 'icon' && <ListItemText primary={childLink.name} />}
                                </ListItemButton>)

                    ))}
                </List>
            </Collapse>
        </>
    )
}