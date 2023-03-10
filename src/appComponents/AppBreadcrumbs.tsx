import { Button, Stack, Typography } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { lightBorder } from '../styling'
import AppBox from './AppBox'

export default function AppBreadcrumbs() {
  const { pathname } = useLocation()
  const go = useNavigate()
  const [sections, setSections] = useState([])
  useEffect(() => {
    const names: string[] = pathname.split('/');
    names[0] === '' && names.shift();
    setSections(names as any)
  }, [pathname])
  return (
    <AppBox coverX flx centerY>
      {sections.map((section, idx) => (
        <Fragment key={section}>
          <Button size="small" onClick={() => go(`/${section}`)} disabled={idx === sections.length - 1}>
            <Typography variant='body2'>
            {section}
            </Typography>
          </Button>
          {idx < sections.length - 1 && '/'}
        </Fragment>
      ))}
    </AppBox>
  )
}
