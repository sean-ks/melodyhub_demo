// src/app/api/getUser/route.js
import { NextResponse } from 'next/server';
import { getUserFromApiRoute } from '../../../lib/apiAuth';

export async function GET() {
  const user = await getUserFromApiRoute();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ user });
}
