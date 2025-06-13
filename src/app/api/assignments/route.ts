import { NextResponse } from 'next/server';
import { Assignment } from '@/types';

// Mock data for development
const mockAssignments: Assignment[] = [
  {
    id: '1',
    studentId: '2',
    sectionId: '1',
    courseId: '123',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    if (!body.studentId || !body.sectionId || !body.courseId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In production, update enrollment in Canvas
    // const response = await fetch(`${process.env.CANVAS_API_URL}/api/v1/sections/${body.sectionId}/enrollments`, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.CANVAS_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     enrollment: {
    //       user_id: body.studentId,
    //       type: 'StudentEnrollment',
    //     },
    //   }),
    // });
    // const assignment = await response.json();

    // Mock response for development
    const newAssignment: Assignment = {
      id: String(mockAssignments.length + 1),
      studentId: body.studentId,
      sectionId: body.sectionId,
      courseId: body.courseId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(newAssignment);
  } catch (error) {
    console.error('Error assigning student:', error);
    return NextResponse.json(
      { error: 'Failed to assign student' },
      { status: 500 }
    );
  }
} 