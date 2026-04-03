-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Profiles table (linked to auth.users)
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('nurse', 'blogger', 'admin')),
  full_name text,
  created_at timestamptz default now()
);

-- Auto-create profile on user signup (admin sets role manually)
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, role, full_name)
  values (new.id, 'nurse', new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Job Postings table
create table public.job_postings (
  id uuid primary key default uuid_generate_v4(),
  author_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  slug text not null unique,
  department text,
  location text,
  employment_type text check (employment_type in ('Full-time', 'Part-time', 'Contract')),
  description text,
  requirements text,
  is_published boolean default true,
  published_at timestamptz default now(),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Blog Posts table
create table public.blog_posts (
  id uuid primary key default uuid_generate_v4(),
  author_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  slug text not null unique,
  excerpt text,
  content text,
  cover_image_url text,
  is_published boolean default false,
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Updated_at trigger function
create or replace function public.update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger job_postings_updated_at
  before update on public.job_postings
  for each row execute function public.update_updated_at();

create trigger blog_posts_updated_at
  before update on public.blog_posts
  for each row execute function public.update_updated_at();

-- RLS Policies

-- Profiles
alter table public.profiles enable row level security;

create policy "Users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Admins can manage all profiles"
  on public.profiles for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Job Postings
alter table public.job_postings enable row level security;

create policy "Anyone can read published job postings"
  on public.job_postings for select
  using (is_published = true);

create policy "Nurses can manage own job postings"
  on public.job_postings for all
  using (
    author_id = auth.uid()
    and exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'nurse'
    )
  );

-- Blog Posts
alter table public.blog_posts enable row level security;

create policy "Anyone can read published blog posts"
  on public.blog_posts for select
  using (is_published = true);

create policy "Bloggers can manage own blog posts"
  on public.blog_posts for all
  using (
    author_id = auth.uid()
    and exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'blogger'
    )
  );
