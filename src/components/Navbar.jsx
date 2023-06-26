import React, { useContext, useState } from 'react'
import { ThemeContext } from '../ThemeContext'
import { Link, useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { MdDarkMode, MdWbTwilight } from 'react-icons/md';

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${query}`);
        setQuery('');
    }
    return (
        <div className="header">
            <div className="header-item">
                <Link to="/">
                    <h4>Tanin Blog</h4>
                </Link>
            </div>
            <div className="header-item">
                <form onSubmit={handleSubmit} className="search-form">
                    <input type="text" name="query" value={query} placeholder="search posts" onChange={e => setQuery(e.target.value)} />
                    <button className="default-button"><string><BiSearch /></string></button>
                </form>
            </div>
            <div className="header-item">
                <a href="/login"><strong>Login</strong></a>{' '}
                <button onClick={toggleTheme}>{theme === 'light' ? <strong><MdWbTwilight /></strong> : <strong><MdDarkMode /></strong>}</button>
            </div>
        </div>
    )
}

export default Navbar
