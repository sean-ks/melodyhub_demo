// src/lib/apiAuth.js
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import prisma from './prisma';

export async function getUserFromApiRoute() {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error('Error fetching user from route:', error);
    return null;
  }

  if (user) {
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
    });

    if (userData) {
      return { ...user, ...userData };
    }
  }

  return null;
}
