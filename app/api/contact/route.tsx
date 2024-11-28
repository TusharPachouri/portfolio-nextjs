import { NextApiRequest, NextApiResponse } from 'next';
// import { resend } from '@/utils/Resend'; // Assuming you have Resend setup
import ContactEmail from '@/emails/ContactEmail'; // Path to the email template
import { ApiResponse } from '@/types/ApiResponse'; // Assuming ApiResponse is your response type

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Simple validation to check if all required fields are provided
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
      // Send the contact form email using the ContactEmail function
      await ContactEmail({ name, email, subject, message });
      // Assuming the email sending is successful if no error is thrown
        return res.status(200).json({
            success: true,
            message: 'Contact message sent successfully!',
        });        
    } catch (error) {
      console.error('Error sending contact email:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to send the contact message. Please try again later.',
      });
    }
  } else {
    // Handle any non-POST request
    res.status(405).json({
      success: false,
      message: 'Method Not Allowed',
    });
  }
}
