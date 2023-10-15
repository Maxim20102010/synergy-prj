import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Chat from '../Chat/Chat';
import Nba from '../Nba/Nba.jsx';
import HomePage from '../HomePage/HomePage';
import './Header.css';
export default function Header() {
  return (
    <div>
        <header className='header'>
            <h1 className='header-text'>My-site</h1>
            <Link className = 'link'to='/'>Home</Link>
            <Link className = 'link' to='/chat'>Chat</Link>
            <Link className = 'link' to='/nba'>Nba</Link>
        </header>
    <Routes>
        <Route path = '/' element = {<HomePage />}/>
        <Route path = '/chat' element= {<Chat />}/>
        <Route path = '/nba' element= {<Nba />}/>
    </Routes>
    </div>
  )
}
