import React from 'react'
import { Link } from 'react-router-dom'
import KasaLogo from '../assets/kasa-logo.svg';

export default function Navbar() {
  return (
    <div>
        <header>
            <div className="logo">
                <img src={KasaLogo} alt="Kasa Logo"></img>
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">A propos</Link></li>
                </ul>
            </div>
        </header>
    </div>
  )
}
