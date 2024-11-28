import { resend } from '@/utils/Resend'
import ContactEmail from '../emails/ContactEmail' // Adjust this based on your contact email template path
import { ApiResponse } from '@/types/ApiResponse'

export async function SendContactEmail(
    name: string,
    email: string,
    subject: string,
    message: string
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev', // Set the from address for your support email
            to: 'tusharpachouri001@example.com', // The recipient where you want to receive contact messages
            subject: `New Contact Message: ${subject}`,
            react: ContactEmail({ name, email, subject, message }), // This is your contact email template
        });

        return { success: true, message: "Contact message sent successfully!" };
    } catch (error) {
        console.error("Error while sending contact email", error);
        return { success: false, message: "Failed to send contact email!" };
    }
}
