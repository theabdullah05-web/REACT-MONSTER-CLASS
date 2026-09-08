import { useState, type ChangeEvent, type FormEvent } from "react";
interface form {
  name: string;
  email: string;
}
const ContactForm = () => {
  const [formData, setFormData] = useState<form>({
    name: "",
    email: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData((preVal) => ({ ...preVal, [name]: value }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // setFormData(preVal=>({...pr}))
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        placeholder="Enter your name"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        placeholder="Enter your email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default ContactForm;
