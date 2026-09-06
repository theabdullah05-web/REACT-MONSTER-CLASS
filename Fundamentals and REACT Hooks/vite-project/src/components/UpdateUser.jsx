import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {
  const [state, setState] = useState("");
  const { changeUser } = useContext(UserContext);
  let handleClick = () => {
    changeUser(state);
    setState("");
  };
  return (
    <>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <button onClick={handleClick}>Enter</button>
    </>
  );
};

export default UpdateUser;
