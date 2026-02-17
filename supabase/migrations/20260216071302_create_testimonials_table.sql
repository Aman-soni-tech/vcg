/*
  # Create Testimonials Table

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key)
      - `student_name` (text) - Student's full name
      - `course` (text) - Course they took
      - `feedback` (text) - Their feedback/testimonial
      - `rating` (integer) - Rating out of 5
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `testimonials` table
    - Add policy for public read access (testimonials are public)
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  course text NOT NULL,
  feedback text NOT NULL,
  rating integer DEFAULT 5,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Testimonials are publicly readable"
  ON testimonials
  FOR SELECT
  TO anon, authenticated
  USING (true);

INSERT INTO testimonials (student_name, course, feedback, rating) VALUES
  ('Rajesh Kumar', 'Core Java', 'This institute helped me understand programming from scratch. The mentors are very supportive and patient.', 5),
  ('Priya Sharma', 'Web Development', 'The practical approach and real-world projects made learning enjoyable and effective. Highly recommended!', 5),
  ('Amit Patel', 'C / C++ Programming', 'Great learning experience with excellent mentorship. The small batch size ensures personalized attention.', 5)
ON CONFLICT DO NOTHING;