import { Box, Divider, Typography } from '@mui/material';
import React, { useState } from 'react'
import { KeyedValue } from '../AppTypes'
import { flex, lightBorder } from '../styling';
interface Props {
    data: KeyedValue;
    onUpdate: (val: KeyedValue) => void;
}
export default function ObjectEditor({data}: Props) {
  const [obj, setObj] = useState(data)
  const onSave = () => {}

  return (
    <>
      {Object.entries(obj).map(([key, value], idx) => (
        <Box key={idx} sx={{...lightBorder(), m: 1, borderRadius: '5px', ...flex}}>
          <Box sx={{...flex, alignItems: 'center',  p:1,}}>
            <Typography variant='subtitle2' sx={{mr: 2}}>Key: </Typography>
            <Typography variant='body2'>{key}</Typography>
          </Box>
          <Divider orientation='vertical' flexItem/>
          <Box sx={{...flex, alignItems: 'center',  p:1,}}>
            <Typography variant='subtitle2' sx={{mr: 2}}>Value: </Typography>
            <Typography variant='body2'>{value}</Typography>
          </Box>
        </Box>
      ))}
    </>
  )
}
