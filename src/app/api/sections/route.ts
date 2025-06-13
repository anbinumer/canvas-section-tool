import { NextResponse } from 'next/server';
import { Section } from '@/types';

// Mock data for development
const mockSections: Section[] = [
  {
    id: '1',
    name: 'Section A',
    displayName: 'Group A',
    capacity: 25,
    isVisible: true,
    courseId: '123',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Section B',
    displayName: 'Group B',
    capacity: 25,
    isVisible: true,
    courseId: '123',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export async function GET() {
  try {
    // In production, fetch from Canvas API
    // const response = await fetch(`${process.env.CANVAS_API_URL}/api/v1/courses/${courseId}/sections`, {
    //   headers: {
    //     'Authorization': `Bearer ${process.env.CANVAS_API_KEY}`,
    //   },
    // });
    // const sections = await response.json();

    return NextResponse.json(mockSections);
  } catch (error) {
    console.error('Error fetching sections:', error);
    return NextResponse.json(
      { error: 'Failed to fetch sections' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    if (!body.name || !body.capacity || !body.courseId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In production, create section in Canvas
    // const response = await fetch(`${process.env.CANVAS_API_URL}/api/v1/courses/${body.courseId}/sections`, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.CANVAS_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     course_section: {
    //       name: body.name,
    //       sis_section_id: body.name,
    //     },
    //   }),
    // });
    // const section = await response.json();

    // Mock response for development
    const newSection: Section = {
      id: String(mockSections.length + 1),
      name: body.name,
      displayName: body.displayName || body.name,
      capacity: body.capacity,
      isVisible: body.isVisible ?? true,
      courseId: body.courseId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(newSection);
  } catch (error) {
    console.error('Error creating section:', error);
    return NextResponse.json(
      { error: 'Failed to create section' },
      { status: 500 }
    );
  }
} 