import { Box, styled } from '@mui/material'
import { BoxProps } from '@mui/system'
import React, { useState } from 'react'
import useOpenClose from '../hooks/useOpenClose'
import AppButton from '../shared/AppButton'
import { cover, coverX, flex, lightBorder } from '../styling'
import AppBreadcrumbs from './AppBreadcrumbs'
import AppDialog from './AppDialog'
import AppKeyValueEditor from './AppKeyValueEditor'
import AppRecord from './AppRecord'


export default function AppUsers() {
  const [users, setUsers] = useState([])
  const nud = useOpenClose()
  return (
    <Wrapper>
      <AppBreadcrumbs />
      <Header>
        <AppButton props={{size: 'small'}} icon="add" iconOnly cb={nud.onOpen} />
      </Header>
      <AppDialog open={nud.open} onClose={nud.onClose} title="New User">
        New User
      </AppDialog>
      <Box>
      </Box>
    </Wrapper>
  )
}


const Wrapper = styled((props: BoxProps) => {
  return <Box {...props} />
})(({theme})=> ({
  ...cover
}))
const Header = styled((props: BoxProps) => {
  return <Box {...props} />
})(({theme})=> ({
  padding: theme.spacing(1),
  ...lightBorder('bottom'),
  ...coverX,
  ...flex,
}))