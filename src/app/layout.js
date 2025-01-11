// src/app/layout.js
import { getUser } from '../lib/auth';
import { UserProvider } from '../context/UserContext';

export const metadata = {
  title: 'MelodyHub',
  description: 'Track your Spotify stats and connect with friends!',
};

export default async function RootLayout({ children }) {
  // This fetches the user on the server side
  const initialUser = await getUser();

  return (
    <html lang="en">
      <body>
        <UserProvider initialUser={initialUser}>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
