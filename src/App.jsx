import React, { useState } from 'react'
import Authorization from './components/Authorization/Authorization.jsx'
import Main from './components/Main/Main.jsx'
export default function App() {
  const [user, setUser] = useState({
    name: localStorage.getItem('name'),
    email: localStorage.getItem('email')
  })

  return (
    <div>
      {user.email  ? <Main /> : <Authorization setUser = {setUser}/>}
    </div>
  )
}
