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

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const USERS = [
  { email: 'jobs@mhmdaa.com', role: 'nurse', full_name: 'Jobs Admin' },
  { email: 'jobs1@mhmdaa.com', role: 'nurse', full_name: 'Jobs Admin 2' },
  { email: 'content@mhmdaa.com', role: 'blogger', full_name: 'Content Admin' },
  { email: 'content1@mhmdaa.com', role: 'blogger', full_name: 'Content Admin 2' },
];

const PASSWORD = process.env.SEED_PASSWORD;
if (!PASSWORD) {
  console.error('Missing SEED_PASSWORD environment variable. Set it before running this script.');
  process.exit(1);
}

async function seed() {
  for (const user of USERS) {
    console.log(`Creating ${user.email}...`);

    const { data, error } = await supabase.auth.admin.createUser({
      email: user.email,
      password: PASSWORD,
      email_confirm: true,
      user_metadata: { full_name: user.full_name, role: user.role },
    });

    if (error) {
      if (error.message?.includes('already been registered')) {
        console.log(`  -> Already exists, updating password and metadata...`);
        const { data: listData } = await supabase.auth.admin.listUsers();
        const existing = listData?.users?.find((u) => u.email === user.email);
        if (existing) {
          const { error: updateError } = await supabase.auth.admin.updateUserById(existing.id, {
            password: PASSWORD,
            user_metadata: { full_name: user.full_name, role: user.role },
          });
          if (updateError) {
            console.error(`  -> Failed to update: ${updateError.message}`);
          } else {
            console.log(`  -> Updated successfully.`);
          }
        }
      } else {
        console.error(`  -> Error: ${error.message}`);
      }
    } else {
      console.log(`  -> Created (id: ${data.user.id})`);
    }
  }

  console.log('\nDone. All users seeded.');
}

seed().catch(console.error);
