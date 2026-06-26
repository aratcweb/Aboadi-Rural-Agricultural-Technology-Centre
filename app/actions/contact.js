"use server";

export async function submitEnquiry(formData) {
  // Extract fields
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const organization = formData.get("organization");
  const type = formData.get("type");
  const message = formData.get("message");
  const honeypot = formData.get("bot_field");

  // Basic Validation
  if (honeypot) {
    // Spam bot filled out honeypot field
    return { error: "Spam detected." };
  }

  if (!name || !email || !message) {
    return { error: "Please fill in all required fields." };
  }

  try {
    // TODO: Implement email delivery abstraction here (e.g., using Resend, SendGrid, etc.)
    // For now, we simulate success safely in development
    
    // Simulate network latency
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true };
  } catch (err) {
    console.error("Enquiry submission failed:", err);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}
