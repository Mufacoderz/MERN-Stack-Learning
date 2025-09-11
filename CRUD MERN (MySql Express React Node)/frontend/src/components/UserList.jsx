import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserList = () => {
  const [users, setUser] = useState([])

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:500/users')
      setUser(response.data)
       
    } catch (error) {
      console.error("Error fetching users:", error)
    }
  }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half ">
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index)=> (
                         <tr key={user.id}>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>
                                <button className='button is-small is-info'>Edit</button>
                                <button className='button is-small is-danger'>Delete</button>
                            </td>
                     </tr>
                    ))}
                   
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList
