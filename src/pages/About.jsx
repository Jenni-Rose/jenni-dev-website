// src/pages/About.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.page}>

      <header className={styles.header}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.intro}>
          Hi! I'm Jenni Scott, a property manager-turned-developer who traded paperwork and tenancy issues for clean code and creative problem-solving. I enjoy an active lifestyle, splitting my time between debugging and bouldering, climbing mountains both metaphorical and literal.        
        </p>
      </header>

      <section className={styles.content}>
        <p>
          After years of juggling spreadsheets, client emails, and maintenance calls, I realised I needed a new kind of challenge, one where I could build things, not just manage them. Inspired by a friend, I joined Code First Girls and quickly fell in love with tech. Turns out, my knack for organising chaos translates beautifully into writing efficient, elegant code.        
        </p>
        <p>
          I threw myself in. Late-night classes, weekend projects, and a full-time commitment to levelling up: I completed a Full-Stack Nanodegree and a Cloud & DevOps +Masters, graduating with distinction. Since then, I’ve been interning as a Full Stack Developer, gaining hands-on experience building real features for live production systems.
        </p>
        <p>
          Every Tuesday, I meet virtually with two fellow CFG grads to collaborate on a React-based app we designed from scratch. As avid readers, we wanted to create a tool that not only recommends books but also helps friends discover titles they can enjoy together, based on shared preferences and reading history. What started as our final project has turned into a regular ritual of pair programming, refactoring, and geeking out over UI choices, and we’ve already got more builds in the pipeline.
        </p>
        <p>
          My ideal team values curiosity, collaboration, and a good bit of nerdy banter. I bring focus, grit, and a genuine love of learning to every line of code, and I’m always up for tackling the next challenge.
        </p>
        <p>
          I'm excited to step into the tech world, meet like-minded people and create cool things together.
        </p>
      </section>

      <div className={styles.ctaWrapper}>
        <Link to="/contact" className={styles.ctaButton}>
          Get in touch
        </Link>
      </div>
    </div>
  );
}
