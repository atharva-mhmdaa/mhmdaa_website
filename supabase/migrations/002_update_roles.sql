-- Update role check constraint to use new role names
alter table public.profiles drop constraint if exists profiles_role_check;
alter table public.profiles add constraint profiles_role_check
  check (role in ('jobs_admin', 'content_admin', 'admin'));

-- Migrate any existing nurse/blogger rows
update public.profiles set role = 'jobs_admin' where role = 'nurse';
update public.profiles set role = 'content_admin' where role = 'blogger';

-- Update trigger to read role from user metadata instead of hardcoding
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, role, full_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'role', 'jobs_admin'),
    new.raw_user_meta_data->>'full_name'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Drop old RLS policies
drop policy if exists "Nurses can manage own job postings" on public.job_postings;
drop policy if exists "Bloggers can manage own blog posts" on public.blog_posts;

-- Jobs admin can manage own job postings
create policy "Jobs admin can manage own job postings"
  on public.job_postings for all
  using (
    author_id = auth.uid()
    and exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('jobs_admin', 'admin')
    )
  );

-- Content admin can manage own blog posts
create policy "Content admin can manage own blog posts"
  on public.blog_posts for all
  using (
    author_id = auth.uid()
    and exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('content_admin', 'admin')
    )
  );
