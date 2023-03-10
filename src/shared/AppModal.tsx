import { Box, Modal } from '@mui/material';
import React from 'react'
import { KeyedValue } from '../AppTypes';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function AppModal({
    children,
    styles = {},
    open,
    onClose
 }:
    {
        children: React.ReactNode;
        styles?: KeyedValue;
        open: boolean;
        onClose: () => void;
    }) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ ...style, ...styles }}>
                {children}
            </Box>
        </Modal>
    )
}
