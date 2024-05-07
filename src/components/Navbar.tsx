// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import {Icon} from "@iconify/react"
import '../App.css'
import '../Responsive.css'
import Main from './Main'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar1'>
        <Icon className='hame' icon="icon-park-outline:hamburger-button" />
        <h2>THENEWSTACK</h2>
        <Icon className='search' icon="ic:baseline-search" />
      </div>
      <div className='navbar2'>
        <p>PODCASTS</p>
        <p>EBOOKS </p>
        <p>EVENTS</p>
        <p>NEWSLETTER</p>
      </div>
      <div className='navbar3'>
        <p>AGRICULTURE</p>
        <p>ENGINEERING</p>
        <p>OPERATIONS</p>
      </div>
      <Main/>
    </div>
    
  )
}

export default Navbar
