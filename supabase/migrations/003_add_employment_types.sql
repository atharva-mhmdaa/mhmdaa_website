-- Expand employment_type to include more options
alter table public.job_postings drop constraint if exists job_postings_employment_type_check;
alter table public.job_postings add constraint job_postings_employment_type_check
  check (employment_type in ('Full-time', 'Part-time', 'Contract', 'Flexible / Per-Case', 'Per Diem', 'Internship'));
