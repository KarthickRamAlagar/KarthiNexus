import emailjs from "@emailjs/browser";

export const sendSignInEmail = async ({ name, email }) => {
  try {
    await emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        to_name: "Karthikeyan",
        to_email: "ramalagarkarthickeyan@gmail.com",
        message: `User ${name} signed in with email ${email} on ${new Date().toLocaleString()}`,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    );
    console.log("Sign-in email sent to admin.");
  } catch (error) {
    console.error("Failed to send sign-in email:", error);
  }
};
