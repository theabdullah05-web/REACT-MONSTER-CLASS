import { useState } from "react";
interface form {
  name: string;
  email: string;
}
const ContactForm = () => {
  const [formData, setFormData] = useState<form>({
    name: "",
    email: "",
  });
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        placeholder="Enter your name"
        name="name"
        id="name"
        value={formData.name}
      />
    </form>
  );
};

export default ContactForm;
