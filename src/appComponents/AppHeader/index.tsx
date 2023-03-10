import { styled, Box, BoxProps } from "@mui/material";

interface Props extends BoxProps {
    flex?: string;
    h?: number
}
const AppHeader = styled((props: Props ) => {
    const {flex, h, ...rest} = props
    return <Box  {...rest} />
  })(({ theme, flex, h }) => ({
    ...(flex && {display: 'flex'}),
    height: h ? `${h}px`: '64px'
  }))
  
export default AppHeader
