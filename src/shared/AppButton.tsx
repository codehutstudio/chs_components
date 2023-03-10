import { Button, IconButton, Tooltip } from '@mui/material';
import {createElement} from 'react'
import { KeyedValue } from '../AppTypes';
import Icons from './Icons';
interface Props {
    icon?: string;
    iconOnly?: boolean;
    text?: string;
    cb: () => void;
    props?: KeyedValue;
    tooltip?: string;
    iconProps?: KeyedValue;
}
export default function AppButton({icon, text, cb, props, iconOnly, tooltip, iconProps = {}}: Props) {
  if(icon && !iconOnly && !tooltip) return <Button {...props} startIcon={<Icons {...iconProps} type={icon} />} onClick={cb}>{text}</Button>
  if(icon && !iconOnly && tooltip) return <Tooltip title={tooltip}><span><Button {...props} startIcon={<Icons {...iconProps} type={icon} />} onClick={cb}>{text}</Button></span></Tooltip>
  if(icon && iconOnly && !tooltip) return <IconButton {...props} onClick={cb}><Icons {...iconProps} type={icon} /></IconButton>
  if(icon && iconOnly && tooltip) return <Tooltip title={tooltip}><span><IconButton {...props} onClick={cb}><Icons {...iconProps} type={icon} /></IconButton></span></Tooltip>
  if(!icon && !iconOnly && tooltip) return <Tooltip title={tooltip}><Button {...props} onClick={cb}>{text}</Button></Tooltip>
  return (
    <Button {...props} onClick={cb}>{text}</Button>
  )
}
