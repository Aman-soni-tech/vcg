/*
  # Create Courses Table

  1. New Tables
    - `courses`
      - `id` (uuid, primary key)
      - `name` (text) - Course name
      - `description` (text) - Short course description
      - `icon` (text) - Lucide React icon name
      - `category` (text) - Course category
      - `duration` (text) - Course duration (e.g., "4 weeks")
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `courses` table
    - Add policy for public read access (courses are public)
*/

CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  category text NOT NULL,
  duration text DEFAULT '4 weeks',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Courses are publicly readable"
  ON courses
  FOR SELECT
  TO anon, authenticated
  USING (true);

INSERT INTO courses (name, description, icon, category, duration) VALUES
  ('C / C++ Programming', 'Learn programming fundamentals and problem solving.', 'Code2', 'Programming', '8 weeks'),
  ('Core Java', 'Master object-oriented programming and Java basics.', 'Coffee', 'Programming', '6 weeks'),
  ('Advanced Java', 'Build enterprise-level Java applications.', 'Zap', 'Programming', '8 weeks'),
  ('Web Development', 'Learn HTML, CSS, JavaScript, and modern web tools.', 'Globe', 'Web', '10 weeks'),
  ('Communication Skills', 'Improve speaking, confidence, and interview skills.', 'MessageCircle', 'Soft Skills', '4 weeks'),
  ('Karm Gyan', 'Sessions on discipline, ethics, and balanced growth.', 'Lightbulb', 'Personal Development', '12 weeks')
ON CONFLICT DO NOTHING;