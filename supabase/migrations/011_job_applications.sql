-- Job Applications table
create table public.job_applications (
  id uuid primary key default uuid_generate_v4(),
  job_posting_id uuid not null references public.job_postings(id) on delete cascade,

  -- Personal
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,

  -- Address
  address text,
  city text not null,
  state text not null,
  zip_code text not null,

  -- US compliance
  work_authorized boolean not null,
  visa_sponsorship boolean not null,
  veteran_status text check (veteran_status in ('prefer_not_to_say', 'veteran', 'active_duty', 'not_a_veteran')),

  -- Professional
  linkedin_url text,
  earliest_start_date date,

  -- Application content
  cover_letter text,
  cv_url text not null,

  -- Admin workflow
  status text not null default 'pending'
    check (status in ('pending', 'reviewed', 'shortlisted', 'rejected')),

  submitted_at timestamptz not null default now()
);

-- Prevent duplicate applications from the same email for the same job
alter table public.job_applications
  add constraint job_applications_unique_email_per_job
  unique (job_posting_id, email);

-- RLS
alter table public.job_applications enable row level security;

-- Anyone can submit an application (no auth required)
create policy "Anyone can submit a job application"
  on public.job_applications for insert
  with check (true);

-- Only jobs_admin / admin / nurse can read applications
create policy "Jobs admins can read job applications"
  on public.job_applications for select
  using (
    (auth.jwt() -> 'user_metadata' ->> 'role') in ('jobs_admin', 'admin', 'nurse')
  );

-- Only jobs_admin / admin / nurse can update status
create policy "Jobs admins can update application status"
  on public.job_applications for update
  using (
    (auth.jwt() -> 'user_metadata' ->> 'role') in ('jobs_admin', 'admin', 'nurse')
  )
  with check (
    (auth.jwt() -> 'user_metadata' ->> 'role') in ('jobs_admin', 'admin', 'nurse')
  );
