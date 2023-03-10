import { BoxProps, styled, Box, Collapse, List } from '@mui/material'
import { KeyedValue, SidebarLink } from '../../AppTypes';
import Link from './AppSidebarLink'
interface AppSidebarProps extends BoxProps {
    mode?: 'icon' | 'full' | 'offScreen';
    children?: React.ReactNode;
    links: SidebarLink[];
    cb: (val?: any) => void
  }
export default function AppSidebar({children, links, mode, cb}: AppSidebarProps) {
    if(!children) {
      return  <Sidebar>
        <Collapse orientation='horizontal' in={mode === 'icon'} collapsedSize={60}>
        <List sx={{width: '250px'}}>
        {links.map(link => <Link key={link.name} {...link} cb={cb}/>)}
        </List>
        </Collapse>
      </Sidebar>
    }
    return (
    <Sidebar>{children}</Sidebar>
  )
}
interface SidebarProps extends BoxProps {
    mode?: 'icon' | 'full' | 'offScreen';
  }
  const Sidebar = styled((props: SidebarProps) => {
    const {mode = 'full', ...other} = props
    return <Box {...other} />
  })(({ theme, mode }) => ({
    overflow: 'hidden'
  }))