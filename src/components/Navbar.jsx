import React from 'react'

function Navbar() {
    return (
        <div className="header">
            <div className="header-item">
                <a href="/">
                    <strong>Tanin Blog</strong>
                </a>
            </div>
            <div className="header-item">
                <a href="/login">Login</a>
            </div>
        </div>
    )
}

export default Navbar
