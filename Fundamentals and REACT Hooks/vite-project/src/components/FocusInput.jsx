import { useRef } from "react";

const FocusInput = () => {
  const inputElement = useRef(null);
  const focusOn = () => {
    inputElement.current.focus();
    inputElement.current.value = "Abdullah";
  };
  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusOn}>Focus and Write Abdullah</button>
    </>
  );
};

export default FocusInput;
