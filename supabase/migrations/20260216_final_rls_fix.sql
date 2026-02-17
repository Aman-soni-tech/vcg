-- Final RLS fix for contact_submissions table
-- This allows public form submissions without authentication

-- First, disable RLS completely for public form access
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Alternative: If you want RLS enabled, use this instead:
-- ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
-- DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
-- CREATE POLICY "allow_public_insert" ON contact_submissions 
--   FOR INSERT TO anon, authenticated 
--   WITH CHECK (true);
