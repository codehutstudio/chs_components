import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ListItemIcon, ListItemText } from '@mui/material';
import Icons from '../shared/Icons';

export default function AppMenu(p: {
    open: boolean;
    onClose: () => void;
    items: { label: string; cb: () => void, icon?: string }[];
    menuButton: JSX.Element;
}) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const showMenu = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        p.onClose()
    };
    const MenuButton = React.cloneElement(p.menuButton, { onClick: handleClick })

    const closeWithCb = (fn: () => void) => () => {
        fn()
        handleClose()
    }

    return (
        <div>
            {React.cloneElement(p.menuButton, {onClick: handleClick})}
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={showMenu}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {p.items.map(({ label, cb, icon }, index) => (
                    icon 
                    ? (
                        <MenuItem  key={label} onClick={closeWithCb(cb)} value={label}>
                            <ListItemIcon>
                                <Icons type={icon} />
                            </ListItemIcon>
                            <ListItemText>{label}</ListItemText>
                        </MenuItem> 
                    )
                    : <MenuItem divider={index <= p.items.length - 1} key={label} onClick={closeWithCb(cb)} value={label}>{label}</MenuItem>
                ))}
            </Menu>
        </div>
    );
}