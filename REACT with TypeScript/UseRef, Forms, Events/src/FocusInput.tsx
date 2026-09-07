import { useRef } from "react";

const FocusInput = () => {
  const inpRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <input ref={inpRef} />
      <button>Focus on Input</button>
    </>
  );
};

export default FocusInput;
