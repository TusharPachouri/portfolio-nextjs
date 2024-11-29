import { resend } from '@/utils/Resend';
import ContactEmail from '../emails/ContactEmail'; // Path to your email template
import { ApiResponse } from '@/types/ApiResponse';

export async function SendContactEmail(
    name: string,
    email: string,
    subject: string,
    message: string
): Promise<ApiResponse> {
    try {
        // Ensure Resend is properly configured
        if (!resend) {
            throw new Error("Resend is not configured. Please set up your API key.");
        }

        // Send email via Resend
        await resend.emails.send({
            from: 'onboarding@resend.dev', // Replace with your verified sender email
            to: 'tusharpachouri001@gmail.com', // Replace or pass dynamically if needed
            subject: `New Contact Message: ${subject}`,
            react: ContactEmail({ name, email, subject, message }), // Ensure this returns a valid React component
        });

        return { success: true, message: "Contact message sent successfully!" };
    } catch (error: any) {
        console.error("Error while sending contact email", error.message || error);
        return { success: false, message: `Failed to send contact email: ${error.message || "Unknown error"}` };
    }
}
