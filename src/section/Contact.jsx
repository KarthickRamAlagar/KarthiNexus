import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert.jsx";
import useAlert from "../hooks/useAlert.js";
const Contact = () => {
  const FormRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // First email to yourself
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Karthikeyan",
          from_email: formData.email,
          to_email: "ramalagarkarthickeyan@gmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Second email to the user 
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_FOLLOWUP_TEMPLATE_ID,
        {
          to_name: formData.name,
          to_email: formData.email,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);

      showAlert({
        text: "Thank you for your message 😃",
        type: "success",
      });

      setTimeout(() => {
        hideAlert();
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      setLoading(false);
      console.error("Email sending error:", error);

      showAlert({
        text: "I didn't receive your message 😢",
        type: "danger",
      });
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="relative py-20 flex items-center justify-center flex-col min-h-screen">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="contact-container relative z-10 max-w-xl w-full sm:px-10 px-5">
          <h3 className="head-text mt-5 text-white text-4xl font-bold text-center">
            Let's Chat
          </h3>
          <p className="text-lg text-white-600 mt-3 text-center">
            Open to Opportunities — Ready to collaborate on exciting new
            projects. Let's Build & Elevate — From creating innovative products
            to enhancing existing ones.
          </p>

          <form
            ref={FormRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Karthikeyan Rengaraj"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Karthiramalagar@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I'm interested in..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
