import { BoxProps, styled, Box } from '@mui/material'

interface AppBoxProps extends BoxProps {
  flx?: boolean;
  cover?: boolean;
  coverY?: boolean;
  coverX?: boolean;
  cm?: number; // Child Margin
  cmY?: number;
  cmX?: number;
  p?: number | string;
  pY?: number | string;
  pX?: number | string;
  center?: boolean;
  centerX?: boolean;
  centerY?: boolean;
  stack?: boolean;
  spread?: boolean;
  grow?: boolean;
  end?:boolean;
  [key:string]: any;
}

const AppBox = styled((props: AppBoxProps) => {
  const {
    flx,
    cover,
    coverY,
    coverX,
    center,
    centerX,
    centerY,
    cm,
    cmX,
    cmY,
    p,
    pY,
    pX,
    stack,
    spread,
    end,
    grow,
    ...other } = props
  return <Box {...other} />
})(({
  theme,
  flx,
  center,
  centerX,
  centerY,
  cm,
  cmX,
  cmY,
  p,
  pY,
  pX,
  stack,
  spread,
  end,
  grow,
  cover,
  coverY,
  coverX,
}) => ({
  ...((flx || center || centerX || centerY || stack || spread || end) && { display: 'flex' }),
  ...(center && { justifyContent: 'center', alignItems: 'center' }),
  ...(centerY && { alignItems: 'center' }),
  ...(centerX && { justifyContent: 'center' }),
  ...(cm && { '> div': { margin: `${cm}px` } }),
  ...(cmX && { '> div': { margin: `0 ${cmX}px 0 ${cmX}px` } }),
  ...(cmY && { '> div': { margin: `${cmY}px 0 ${cmY}px 0` } }),
  ...(p && {padding: typeof p === 'string' ? p : `${p}px`}),
  ...(pY && {padding: typeof p === 'string' ? pY : `${p}px 0 ${p}px 0`}),
  ...(pX && {padding: typeof p === 'string' ? pX : `0 ${p}px 0 ${p}px`}),
  ...(stack && { flexDirection: 'column'}),
  ...(cover && { width: '100%', height: '100%'}),
  ...(coverY && { height: '100%'}),
  ...(coverX && { width: '100%'}),
  ...(spread && { justifyContent: 'space-between'}),
  ...(grow && { flexGrow: 1}),
  ...(end && { justifyContent: 'flex-end'})
}))

export default AppBox