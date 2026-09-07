import { useState } from "react";

const Form = () => {
  type formData = {
    name: string;
    email: string;
    password: string;
  };
  const [form, setForm] = useState<formData>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <form>
      <input value={form.name} />
      <input value={form.email} />
      <input value={form.password} />
    </form>
  );
};

export default Form;
