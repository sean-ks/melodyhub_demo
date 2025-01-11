// src/app/(authenticated)/myProfile/page.js
import { getUser } from '../../../lib/auth';
import styles from './myProfile.module.css';

export const metadata = {
  title: 'My Profile - MelodyHub',
};

export default async function MyProfile() {
  const user = await getUser();

  if (!user) {
    // If no user is found, you could optionally handle or redirect
    return <div className={styles.container}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>My Profile</h1>
      <div className={styles.userInfo}>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Name:</strong> {user.name}</p>
      </div>
    </div>
  );
}
