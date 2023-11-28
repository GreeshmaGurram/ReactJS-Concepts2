import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from './cakeActions'

function NewCakeContainer() {
  const [number, setNumber] = useState(1)
    const noOfCakes = useSelector(state => state.cake.noOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>No of cakes - {noOfCakes}</h2>
        <input type='text' value={number} onChange={e => setNumber(e.target.value)}/>
        <button onClick={() => dispatch(buyCake(number))}>Buy {number} Cakes</button>
    </div>
  )
}

export default NewCakeContainer