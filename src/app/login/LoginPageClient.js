// src/app/login/LoginPageClient.js
'use client';

import React from 'react';
import supabase from '../../lib/supabase';
import Navbar from '../../components/Navbar';
import styles from './login.module.css';

export default function LoginPageClient() {
  const handleLoginWithSpotify = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'spotify',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`, 
          // add ?next=/someRoute if you want to redirect after OAuth
        },
      });
      if (error) {
        console.error('Spotify OAuth error:', error);
        alert('Login failed: ' + error.message);
      }
      // signInWithOAuth will auto-redirect the user to Spotify
    } catch (err) {
      console.error('Login error:', err);
      alert('Login error: ' + err.message);
    }
  };

  return (
    <div className={styles.container}>
      <Navbar user={null} />
      <main className={styles.main}>
        <h1>Login</h1>
        <button onClick={handleLoginWithSpotify} className={styles.spotifyButton}>
          Log in with Spotify
        </button>
      </main>
    </div>
  );
}
