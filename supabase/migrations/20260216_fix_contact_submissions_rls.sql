-- Disable RLS for contact_submissions table to allow public demo form submissions
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- Create a new simple policy that allows everyone to insert
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public demo submissions" 
  ON contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Allow anyone to select (for verification if needed)
CREATE POLICY "Allow public read" 
  ON contact_submissions 
  FOR SELECT 
  USING (true);
