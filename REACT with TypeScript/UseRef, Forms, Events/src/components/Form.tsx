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
      <input />
      <input />
      <input />
    </form>
  );
};

export default Form;
