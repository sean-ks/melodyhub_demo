// src/app/auth/callback/route.js
import { NextResponse } from 'next/server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const supabase = createServerComponentClient({ cookies: () => request.headers });
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // success: redirect to next or homepage
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // fallback error
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
