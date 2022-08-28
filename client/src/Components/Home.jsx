import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import Chat1 from './Home/Chat1';

function Home() {
    return (
        <>
            <header className='header'>
                <nav className='nav'>
                    <NavLink className="link" to="/">Home</NavLink>
                    <NavLink className="link chat" to="/login">Chatea Ya!</NavLink>
                    <NavLink className="link" to="/register">Register</NavLink>
                </nav>
            </header>
            <main>
                <Chat1 className="chat-1" />
            </main>
        </>
    )
}

export default Home