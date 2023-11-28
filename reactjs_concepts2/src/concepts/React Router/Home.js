import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate =  useNavigate()
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate('order-summary', {replace: true})}>Place Order</button>
      {/* to replace the history instead of pushing an url on to the stack */}
    </div>
  )
}

export default Home