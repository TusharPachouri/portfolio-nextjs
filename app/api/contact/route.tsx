// import { NextApiRequest, NextApiResponse } from "next";
// // import { resend } from '@/utils/Resend'; // Assuming you have Resend setup
// import ContactEmail from "@/emails/ContactEmail"; // Path to the email template
// // import { ApiResponse } from "@/types/ApiResponse"; // Assuming ApiResponse is your response type

// export async function POST(req: Request) {
//   const { name, email, subject, message } = await req.json();

//   // Simple validation to check if all required fields are provided
//   if (!name || !email || !subject || !message) {
//     return Response.json({
//       success: false,
//       message: "All fields are required.",
//     });
//   }

//   try {
//     // Send the contact form email using the ContactEmail function
//     await ContactEmail({ name, email, subject, message });
//     // Assuming the email sending is successful if no error is thrown
//     return Response.json({
//       success: true,
//       message: "Contact message sent successfully!",
//     });
//   } catch (error) {
//     console.error("Error sending contact email:", error);
//     return Response.json({
//       success: false,
//       message: "Failed to send the contact message. Please try again later.",
//     });
//   }
// }
