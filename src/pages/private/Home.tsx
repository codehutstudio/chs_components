import React from 'react'
import { Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Dashboard from '../../shared/Dashboard'
import { PrivateMenuLinks } from '../../store'

export default function Home() {
  const menuLinks = useRecoilValue(PrivateMenuLinks)
  return <Dashboard links={menuLinks}/>
}
