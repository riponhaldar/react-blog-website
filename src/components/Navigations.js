import React from 'react'

import '../assets/scss/_navigation.scss'
import { Link } from 'react-router-dom'
const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Contact Us',
    path: '/contactus',
  },
  {
    title: 'login',
    path: ' /login',
  },
]
export default function Navigations() {
  return (
    <nav className='site-navigation'>
      <span>RipHaldar</span>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.title} </Link>
          </li>
        ))}
      </ul>
      <button className='btn'>nack</button>
    </nav>
  )
}
