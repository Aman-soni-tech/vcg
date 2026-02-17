/*
  # Create Stats Table

  1. New Tables
    - `stats`
      - `id` (uuid, primary key)
      - `key` (text, unique) - Stat identifier (students_trained, courses_available, etc.)
      - `value` (integer) - Stat value
      - `label` (text) - Display label
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `stats` table
    - Add policy for public read access (stats are public)
*/

CREATE TABLE IF NOT EXISTS stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value integer NOT NULL,
  label text NOT NULL,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Stats are publicly readable"
  ON stats
  FOR SELECT
  TO anon, authenticated
  USING (true);

INSERT INTO stats (key, value, label) VALUES
  ('students_trained', 100, '100+ Students trained'),
  ('courses_available', 6, '6+ Courses available'),
  ('batch_size', 15, 'Small batch sizes'),
  ('industry_projects', 50, 'Industry-style projects')
ON CONFLICT (key) DO NOTHING;