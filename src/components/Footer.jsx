import React from 'react'
import KasaLogo from '../assets/kasa-logo.svg';

export default function Footer() {
  return (
    <>
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={KasaLogo} alt="logo" />
                </div>
                <div className="footer-copyright">
                    <p>&copy; 2020 Kasa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
  )
}
