import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userActions'

function UserContainer() {

  useEffect(() => { dispatch(fetchUsers())}, [])

  const usersData = useSelector(state => state.users)
  const dispatch = useDispatch()
  return (
    usersData.loading ? <h2>loading</h2> : 
    usersData.error ? <h2>{usersData.error}</h2> :
    (<div>
      <h2>Users List</h2>
      <div>
        {
          usersData.data && usersData.data.map(user => <h2>{user.name
          }</h2>)
        }
      </div>
    </div>)
  )
}

export default UserContainer