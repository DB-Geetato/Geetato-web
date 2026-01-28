"use server";

import { verifyRecaptcha } from "@/lib/recaptcha";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const inquiry = formData.get("inquiry") as string;
  const message = formData.get("message") as string;
  const recaptchaToken = formData.get("recaptchaToken") as string;

  if (!recaptchaToken) {
    return { success: false, error: "reCAPTCHA verification failed. Please try again." };
  }

  // 1. Verify reCAPTCHA
  const verification = await verifyRecaptcha(recaptchaToken);
  if (!verification.success) {
    return { success: false, error: verification.error || "Anti-spam verification failed." };
  }

  // 2. Log or send email
  console.log("=== NEW INQUIRY RECEIVED ===");
  console.log(`Destination: contact@geetato.com`);
  console.log(`CC: deepak@geetato.com`);
  console.log(`From: ${name} (${email}, ${phone})`);
  console.log(`Subject: ${inquiry}`);
  console.log(`Message: ${message}`);
  console.log("============================");

  // 3. Simulate Auto-reply
  console.log(`AUTO-REPLY SENT TO: ${email}`);
  console.log(`Message: "Thank you for contacting Geetato. We've received your inquiry and will respond within 24 hours."`);

  /* 
    IMPLEMENTATION NOTE:
    In a real production environment, integrate with Resend/Nodemailer here:
    
    await resend.emails.send({
      from: 'Geetato <notifications@geetato.com>',
      to: 'contact@geetato.com',
      cc: 'deepak@geetato.com',
      subject: `New Inquiry: ${inquiry} from ${name}`,
      text: message,
    });
    
    // Send auto-reply
    await resend.emails.send({
      from: 'Geetato <contact@geetato.com>',
      to: email,
      subject: 'Thank you for contacting Geetato',
      text: "Thank you for contacting Geetato. We've received your inquiry and will respond within 24 hours.",
    });
  */

  return { success: true };
}
