import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

interface Props {
    children: React.ReactNode;
    actions?: React.ReactNode;
    onClose: () => void;
    open: boolean;
    title: string;
    showActions?: boolean
}
export default function AppDialog(p: Props) {
    return (
        <BootstrapDialog
            onClose={p.onClose}
            aria-labelledby="customized-dialog-title"
            open={p.open}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={p.onClose}>
            {p.title}
            </BootstrapDialogTitle>
            <DialogContent dividers>
            {p.children}
            </DialogContent>
            { p.showActions && (<DialogActions>
                {p.actions && p.actions}
                {!p.actions && (<Button autoFocus onClick={p.onClose}>
                    Save changes
                </Button>)}
            </DialogActions>)}
        </BootstrapDialog>
    );
}
