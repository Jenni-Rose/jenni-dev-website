// src/components/NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'; // CSS module for navbar

export default function NavBar() {
  return (
    <nav className={styles.navbar}> {/* Main navigation wrapper */}
      <div className={styles.container}> {/* Centers content & sets max width */}

        {/* LEFT SIDE: my name + social icons */}
        <div style={{ display: 'flex', alignItems: 'center' }}> 
          <Link to="/" className={styles.brand}>Jenni Rose.</Link> {/* Name acts as home link */}

          <a
            href="https://www.linkedin.com/in/jennifer-rose-scott"
            target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className={`${styles.link} ${styles.socialIcon}`} // Shared link + spacing style
          >
            <i className={`bi bi-linkedin ${styles.icon}`} /> {/* LinkedIn icon */}
            <span className={styles.text}>LinkedIn</span>     {/* Hidden text shown on hover */}
          </a>

          <a
            href="https://github.com/Jenni-Rose"
            target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className={`${styles.link} ${styles.socialIcon}`}
          >
            <i className={`bi bi-github ${styles.icon}`} />   {/* GitHub icon */}
            <span className={styles.text}>GitHub</span>       {/* Hover text */}
          </a>
        </div>

        {/* RIGHT SIDE: page links with icon/text swap */}
        <div className={styles.links}>
          <Link to="/" className={styles.link} aria-label="Home">
            <i className={`bi bi-house ${styles.icon}`} />    {/* Home icon */}
            <span className={styles.text}>Home</span>        {/* Hover text */}
          </Link>
          <Link to="/about" className={styles.link} aria-label="About">
            <i className={`bi bi-file-person-fill ${styles.icon}`} /> {/* About icon */}
            <span className={styles.text}>About</span>            {/* Hover text */}
          </Link>
          <Link to="/contact" className={styles.link} aria-label="Contact">
            <i className={`bi bi-envelope ${styles.icon}`} /> {/* Contact icon */}
            <span className={styles.text}>Contact</span>      {/* Hover text */}
          </Link>
        </div>

      </div>
    </nav>
  );
}
