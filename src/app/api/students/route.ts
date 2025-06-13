import { NextResponse } from 'next/server';
import { Student } from '@/types';

// Mock data for development
const mockStudents: Student[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    courseId: '123',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    sectionId: '1',
    courseId: '123',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export async function GET() {
  try {
    // In production, fetch from Canvas API
    // const response = await fetch(`${process.env.CANVAS_API_URL}/api/v1/courses/${courseId}/users?enrollment_type[]=student`, {
    //   headers: {
    //     'Authorization': `Bearer ${process.env.CANVAS_API_KEY}`,
    //   },
    // });
    // const students = await response.json();

    return NextResponse.json(mockStudents);
  } catch (error) {
    console.error('Error fetching students:', error);
    return NextResponse.json(
      { error: 'Failed to fetch students' },
      { status: 500 }
    );
  }
} 