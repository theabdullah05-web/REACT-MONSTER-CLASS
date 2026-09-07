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
      <input type="text" placeholder="enter name" />
      <input type="email" placeholder="enter email" />
      <input type="password" placeholder="enter password" />
      <button>Submit</button>
    </form>
  );
};

export default Form;
