import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from './creamAction'

function IceCreamContainer() {
    const noOfIcecreams = useSelector(state => state.iceCream.noOfIceCreams)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>No of ice creams - {noOfIcecreams}</h2>
        <button onClick={() => dispatch(buyIceCream())}>Buy Icecream</button>
    </div>
  )
}

export default IceCreamContainer