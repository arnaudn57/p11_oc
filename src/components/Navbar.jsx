import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <header>
            <div className="logo">
                <img src="../assets/kasa-logo.svg" alt="Kasa Logo"></img>
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">A propos</Link></li>
                </ul>
            </div>
        </header>
    </>
  )
}
