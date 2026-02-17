// API client for backend demo requests
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export interface Course {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  duration: string;
  created_at: string;
}

export interface Testimonial {
  id: string;
  student_name: string;
  course: string;
  feedback: string;
  rating: number;
  created_at: string;
}

export interface Stat {
  id: string;
  key: string;
  value: number;
  label: string;
  updated_at: string;
}

export interface DemoSubmission {
  name: string;
  phone: string;
  email: string;
  course_interest: string;
  message: string;
}

export async function submitDemoRequest(formData: DemoSubmission) {
  try {
    const response = await fetch(`${API_URL}/api/demo-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to submit demo request');
    }

    const data = await response.json();
    console.log('Demo request submitted:', data);
    return data;
  } catch (error) {
    console.error('Error submitting demo request:', error);
    throw error;
  }
}

export async function getDemoRequests() {
  try {
    const response = await fetch(`${API_URL}/api/demo-requests`);

    if (!response.ok) {
      throw new Error('Failed to fetch demo requests');
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching demo requests:', error);
    throw error;
  }
}

export async function getCourses(): Promise<Course[]> {
  // TODO: Implement when courses API is ready
  return [];
}

export async function getTestimonials(): Promise<Testimonial[]> {
  // TODO: Implement when testimonials API is ready
  return [];
}

export async function getStats(): Promise<Stat[]> {
  // TODO: Implement when stats API is ready
  return [];
}

export async function submitContact(formData: {
  name: string;
  phone: string;
  email: string;
  course_interest: string;
  message: string;
}) {
  return submitDemoRequest(formData);
}
