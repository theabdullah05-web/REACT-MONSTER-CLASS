import { useRef } from "react";

const Contact = () => {
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
    </>
  );
};

export default Contact;
