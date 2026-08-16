import { useState } from "react";
import Alert from "./Alert";

const Copy = () => {
  let [copy, setCopy] = useState();
  let [copied, setCopied] = useState(false);
  let handleSubmit = () => {
    navigator.clipboard.writeText(copy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    });
  };
  return (
    <>
      <input value={copy} onChange={(e) => setCopy(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>
        Copy
      </button>
      <Alert copied={copied} />
    </>
  );
};

export default Copy;
