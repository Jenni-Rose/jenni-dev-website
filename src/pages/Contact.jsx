// src/pages/Contact.jsx

import React, { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  // Form status: idle to sending to sent/error
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);
    const endpoint = 'https://formsubmit.co/jenniscott521@gmail.com';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.formWrapper}>
        <h1>Contact Me</h1>

        {status === 'sent' ? (
          <p className={styles.thanks}>Thanks so much! I’ll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              Name
              <input type="text" name="name" required />
            </label>

            <label>
              Email
              <input type="email" name="email" required />
            </label>

            <label>
              Subject
              {/* new subject field */}
              <input type="text" name="subject" required />
            </label>

            <label>
              Message
              <textarea name="message" rows="5" required />
            </label>

            <button type="submit" disabled={status === 'sending'}>
              {/* Send button */}
              {status === 'sending' ? 'Sending…' : 'Drop me a message!'}
            </button>

            {status === 'error' && (
              <p className={styles.error}>
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
