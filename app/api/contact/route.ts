import { NextRequest, NextResponse } from 'next/server';
import { SendContactEmail } from '@/helpers/SendVerificationEmail'; // Adjust the import path as needed
import { z } from 'zod';

// Zod validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

export async function POST(req: NextRequest) {
  try {
    // Parse and validate request body
    const body = await req.json();
    
    // Validate the request body against the schema
    const validationResult = ContactFormSchema.safeParse(body);
    
    // If validation fails, return error response
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          errors: validationResult.error.errors 
        }, 
        { status: 400 }
      );
    }

    // Destructure validated data
    const { name, email, subject, message } = validationResult.data;

    // Send email using the SendContactEmail function
    const emailResponse = await SendContactEmail(
      name, 
      email, 
      subject, 
      message
    );

    // Return appropriate response based on email sending result
    if (emailResponse.success) {
        console.log('Message sent successfully:', emailResponse.message);
      return NextResponse.json(
        { 
          success: true, 
          message: "Message sent successfully!" 
        }, 
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { 
          success: false, 
          message: emailResponse.message 
        }, 
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Internal server error. Please try again later." 
      }, 
      { status: 500 }
    );
  }
}