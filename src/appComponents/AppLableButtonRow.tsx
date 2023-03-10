import { Divider } from '@mui/material';
import React, { useState } from 'react'
import AppLabelButton from './AppLabelButton';
interface Props {
    buttons: LabelButtonConfig[];
    dividerPosition?: 'start' | 'end'
}
export interface LabelButtonConfig {
    label: string;
    icon: string;
    color?: string;
    cb: (p?: any) => void;
    disabled?: boolean;
}
export default function AppLableButtonRow({ buttons, dividerPosition = 'end' }: Props) {
    const [count, setCount] = useState(buttons.length - 1)
    return (
        <>
            {buttons.map(({ label, icon, cb, color, disabled = false }) => (
                <React.Fragment key={label}>
                    {dividerPosition === 'start' && <Divider orientation='vertical' flexItem />}
                    <AppLabelButton disabled={disabled} color={color ? color : 'primary'} label={label} icon={icon} onClick={cb} />
                    {dividerPosition === 'end' && <Divider orientation='vertical' flexItem />}
                </React.Fragment>
            ))}
        </>
    )
}
