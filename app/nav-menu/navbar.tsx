'use client';

import './navbar.scss';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <Link href="/">Alpha Defizit</Link>
        </div>

        <button
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        <div className={`menu-links ${isOpen ? 'show' : ''}`}>
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/news" className="nav-link">
            News
          </Link>
          <Link href="/bio" className="nav-link">
            Bio
          </Link>
          <Link href="/media" className="nav-link">
            Media
          </Link>
          <Link href="/shows" className="nav-link">
            Shows
          </Link>
          <Link href="/merch" className="nav-link">
            Merch
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
