import { BoxProps, styled, Box } from '@mui/material'

interface Props extends BoxProps {
}
const AppWrapper = styled((props: Props) => {
    return <Box {...props} />
  })(({ theme }) => ({
    width: '100%',
    height: '100%'
  }))
export default AppWrapper