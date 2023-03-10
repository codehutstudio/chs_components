import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { KeyedValue } from '../AppTypes';
import Icons from '../shared/Icons';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

interface TabConfig {label: string; icon: string}
export default function BasicTabs(p: {
    children: React.ReactNode;
    tabs: string[] | TabConfig[];
}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {p.tabs.map((tab, index) => (
                        typeof tab === 'string' 
                        ? <Tab key={tab} label={tab} {...a11yProps(index)} />
                        : <Tab key={tab.label} label={tab.label} icon={<Icons type={tab.icon} size="small" />} {...a11yProps(index)} />
                    ))}
                </Tabs>
            </Box>
            {React.Children.toArray(p.children).map((child, index) => (
                <TabPanel key={index} value={value} index={index}>
                    {child}
                </TabPanel>))}
        </Box>
    );
}