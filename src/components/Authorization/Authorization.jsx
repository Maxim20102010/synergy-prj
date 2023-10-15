import React from 'react'
import { useState } from 'react'
import './Authorization.css';
export default function Authorization({setUser}) {
  const [data, setData] = useState({});
  // const [email, setEmail] = useState('');
  // const [login, setLogin] = useState('');
  const pushData = (e) => {
    console.log(data)
    e.preventDefault();
    setUser({
      name: e.target[0].value,
      email: e.target[2].value
    })
    localStorage.setItem('name', e.target[0].value)
    localStorage.setItem('email', e.target[2].value)
  }
  const handleSubmit = (e) => {
    setData({
      name: e.target.value,
      email: e.target.value
    })
    console.log(e.target.value)
  }
  return (
    <div>
      <form onSubmit={pushData} className='form' action="">
        <label htmlFor="">Введите имя:</label>
        <input onChange={handleSubmit} placeholder='Имя' name='text' type='text'/>
        <label htmlFor="">Введите пароль:</label>
        <input onChange={handleSubmit} placeholder='Пароль' name= 'password'type='password'/>
        <label htmlFor="">Введите email:</label>
        <input onChange={handleSubmit} placeholder='Почта' name = 'email' type='email'/>
        <button>Отправить данные</button>
      </form>
    </div>
  )
}
