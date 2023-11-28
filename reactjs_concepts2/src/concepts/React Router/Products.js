import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
    <div>
        <input type='search' placeholder='Search Products'/>
    </div>
    <nav>
        <Link to='featured'>Featured Products</Link>
        <Link to='new-products'>New Products</Link>
    </nav>
    <Outlet/>
    {/* checks for matching list of child routes in the parent layout */}
    {/* says the parent component to render the child component in this page itself */}
    </>
    
  )
}

export default Products