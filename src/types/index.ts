export interface Section {
  id: string;
  name: string;
  displayName?: string;
  capacity: number;
  isVisible: boolean;
  courseId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  sectionId?: string;
  courseId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Assignment {
  id: string;
  studentId: string;
  sectionId: string;
  courseId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Course {
  id: string;
  name: string;
  code: string;
  term: string;
  createdAt: string;
  updatedAt: string;
}

export interface LTIUser {
  id: string;
  name: string;
  email: string;
  roles: string[];
  courseId: string;
}

export interface LTIContext {
  courseId: string;
  userId: string;
  roles: string[];
  custom: {
    canvas_api_domain: string;
    canvas_user_id: string;
    canvas_course_id: string;
  };
} 