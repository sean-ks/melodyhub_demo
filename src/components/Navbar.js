// src/components/Navbar.js
'use client';

import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar({ user }) {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navLogo}>MelodyHub</Link>
      <div className={styles.navLinks}>
        {user ? (
          <>
            <Link href="/(authenticated)/myProfile">My Profile</Link>
            <Link href="/(authenticated)/myStats">My Stats</Link>
            <Link href="/(authenticated)/friends">Friends</Link>
            <Link href="/(authenticated)/groups">Groups</Link>
            <button
              className={styles.logoutButton}
              onClick={async () => {
                // sign out
                const { error } = await fetch('/api/logout'); 
                // or directly with supabase:
                // await supabase.auth.signOut();
                window.location.href = '/';
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}
