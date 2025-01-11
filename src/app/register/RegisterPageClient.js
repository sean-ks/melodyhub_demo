// src/app/register/RegisterPageClient.js
'use client';

import React from 'react';
import supabase from '../../lib/supabase';
import Navbar from '../../components/Navbar';
import styles from './register.module.css';

export default function RegisterPageClient() {
  const handleSignUpWithSpotify = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'spotify',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) {
        console.error('Spotify OAuth error:', error);
        alert('Signup failed: ' + error.message);
      }
    } catch (err) {
      console.error('Signup error:', err);
      alert('Signup error: ' + err.message);
    }
  };

  return (
    <div className={styles.container}>
      <Navbar user={null} />
      <main className={styles.main}>
        <h1>Sign Up</h1>
        <button onClick={handleSignUpWithSpotify} className={styles.spotifyButton}>
          Sign up with Spotify
        </button>
      </main>
    </div>
  );
}
