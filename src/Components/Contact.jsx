import { useState } from 'react';
import './ContactForm.css'; // 💡 Import external CSS

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "72950771-8faf-444c-bb9d-960282db302f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <input className="form-input" type="text" name="name" placeholder="Your Name" required />
      <input className="form-input" type="email" name="email" placeholder="Your Email" required />
      <textarea className="form-textarea" name="message" placeholder="Your Message" required />
      <button className="submit-btn" type="submit">Submit Form</button>
      <span className="result-msg">{result}</span>
    </form>
  );
}
