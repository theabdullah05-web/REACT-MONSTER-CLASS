import { useRef, useState } from "react";

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
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  return (
    <>
      <form>
        <input type="text" placeholder="enter name" ref={name} />
        <input type="email" placeholder="enter email" ref={email} />
        <input type="password" placeholder="enter password" ref={password} />
        <button>Submit</button>
      </form>
      <section>
        <h1>Name: {form.name}</h1>
        <h1>Email: {form.email}</h1>
        <h1>Password: {form.password}</h1>
      </section>
    </>
  );
};

export default Form;
