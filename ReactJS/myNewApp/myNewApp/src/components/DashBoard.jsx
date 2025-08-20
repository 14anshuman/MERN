import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const DashBoard = () => {
  return (
    <>
     <Navbar/>
    <h1> DashBoard</h1>
    <Outlet/>
    </>
  )
}

export default DashBoard