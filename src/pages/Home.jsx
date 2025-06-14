// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';       
import IconCarousel from '../components/IconCarousel';
import Jenni from '../assets/images/Jenni.jpeg';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>

      {/* HEADER */}
      <header className={styles.header}>
        {/* Circular profile photo with silver border */}
        <img
          src={Jenni}
          alt="Jenni Scott"
          className={styles.avatar}
        />

        {/* Slide-in heading */}
        <h1 className={styles.title}>Hello, I’m Jenni</h1>
        {/* Slide-in subtitle */}
        <p className={styles.subtitle}>
          Full Stack Developer
        </p>

                {/* “Get in touch” button */}
        <Link to="/contact" className={styles.ctaButton}>
          Get in touch
        </Link>
      </header>

      {/* MAIN placeholder */}
      <main className={styles.main}></main>

      {/* ICON CAROUSEL pinned to bottom */}
      <section className={styles.carousel}>
        <IconCarousel />
      </section>
    </div>
  );
}
