import { Box, Button, Typography } from '@mui/material'
import React, { forwardRef } from 'react'
import Icons from '../shared/Icons'

const AppLabelButton = forwardRef((props: {[key:string]: any}, ref) => {
    const { icon, label, ...rest } = props as any
    return (
        <Button
            component={Button}
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
            {...rest}
        >
            <Icons sx={{fontSize: '1.2rem'}} type={icon}/>
            <Typography variant='caption' sx={{fontSize: '.5rem', pt: '5px'}}>{label}</Typography>
        </Button>
    )
})

export default AppLabelButton
