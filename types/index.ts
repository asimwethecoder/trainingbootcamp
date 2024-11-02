export interface Instructor {
  id: string;
  name: string;
  title: string;
  image?: string;
}

export interface BootcampSession {
  id: number;
  date: string;
  time: string;
  title: string;
  instructor: Instructor;
  status: 'upcoming' | 'completed';
  topics: string[];
  materials?: {
    name: string;
    url: string;
  }[];
}

export interface RegistrationForm {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  experience: 'beginner' | 'intermediate' | 'advanced';
}