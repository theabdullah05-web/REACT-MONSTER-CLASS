import { useRef, useState } from "react";

const Contact = () => {
  type form = {
    name: string;
    email: string;
    phone: string;
  };
  const [form, setForm] = useState<form>({
    name: "",
    email: "",
    phone: "",
  });
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  return (
    <>
      <form>
        <input type="test" placeholder="enter name" ref={name} />
        <input type="email" placeholder="enter email" ref={email} />
        <input type="number" placeholder="enter phone" ref={phone} />
        <button>Submit</button>
      </form>
      <section>
        <h1>{form.name}</h1>
        <h1>{form.email}</h1>
        <h1>{form.phone}</h1>
      </section>
    </>
  );
};

export default Contact;
