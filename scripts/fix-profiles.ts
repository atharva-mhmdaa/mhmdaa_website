import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const envPath = resolve(__dirname, '..', '.env.local');
const envContent = readFileSync(envPath, 'utf-8');
for (const line of envContent.split('\n')) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const eqIdx = trimmed.indexOf('=');
  if (eqIdx === -1) continue;
  const key = trimmed.slice(0, eqIdx);
  const val = trimmed.slice(eqIdx + 1);
  if (!process.env[key]) process.env[key] = val;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } },
);

const CONTENT_EMAILS = ['content@mhmdaa.com', 'content1@mhmdaa.com'];

async function fixProfiles() {
  const { data: listData } = await supabase.auth.admin.listUsers();
  if (!listData?.users) {
    console.error('Failed to list users');
    process.exit(1);
  }

  for (const email of CONTENT_EMAILS) {
    const user = listData.users.find((u) => u.email === email);
    if (!user) {
      console.error(`User ${email} not found`);
      continue;
    }

    const { error } = await supabase
      .from('profiles')
      .update({ role: 'blogger' })
      .eq('id', user.id);

    if (error) {
      console.error(`Failed to update ${email}: ${error.message}`);
    } else {
      console.log(`Updated ${email} profile role to 'blogger'`);
    }
  }

  console.log('\nVerifying all profiles...');
  const { data: profiles, error } = await supabase.from('profiles').select('id, role, full_name');
  if (error) {
    console.error(`Failed to read profiles: ${error.message}`);
  } else {
    for (const p of profiles || []) {
      const user = listData.users.find((u) => u.id === p.id);
      console.log(`  ${user?.email || p.id} -> role: ${p.role}, name: ${p.full_name}`);
    }
  }

  console.log('\nDone.');
}

fixProfiles().catch(console.error);
