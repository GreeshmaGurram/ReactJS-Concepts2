import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './Auth'
// NavLink is used to style active links ==> specifically used for navbars or breadcrumbs
// class="active" is applied to the selected link using NavLink
export const Navbar = () => {

  const navLinkStyles = ({isActive}) => {
    return {
      fontWeight : isActive ? 'bold' : 'normal'
    }
  }
  const auth = useAuth()
  return (
    <nav>
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        use Link to navigate within components and <a> tag to navigate to other websites */}
        <NavLink to='/' style={navLinkStyles}>Home</NavLink>
        <NavLink to='/about' style={navLinkStyles}>About</NavLink>
        <NavLink to='/products' style={navLinkStyles}>Products</NavLink>
        <NavLink to='/profile' style={navLinkStyles}>Profile</NavLink>
        {
          !auth.user && (
            <NavLink to='/login' style={navLinkStyles}>Login</NavLink>
          )
        }
    </nav>
  )
}
