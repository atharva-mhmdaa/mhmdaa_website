import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  if (!email?.trim() || !password) {
    return NextResponse.json(
      { error: 'Please enter both email and password.' },
      { status: 400 },
    );
  }

  const supabase = await createClient();

  const { data, error: signInError } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  });

  if (signInError || !data.user) {
    return NextResponse.json(
      { error: 'Invalid email or password.' },
      { status: 401 },
    );
  }

  const role = (data.user.user_metadata?.role as string) || 'nurse';
  const isContent = role === 'blogger' || role === 'content_admin';
  const redirect = isContent ? '/content/dashboard' : '/jobs/dashboard';

  return NextResponse.json({ success: true, redirect });
}
