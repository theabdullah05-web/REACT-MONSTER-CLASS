import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorusername, setErrorUsername] = useState("");
  const [erroremail, setErrorEmail] = useState("");
  const [errorpassword, setErrorPassword] = useState("");
  const [errorconfirmPassword, setErrorConfirmPassword] = useState("");

  const [usernameColor, setUsernameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();
    if (username.length > 8) {
      setErrorUsername("");
      setUsernameColor("green");
      setUsername("");
    } else {
      setErrorUsername("Username must be atleast 8 characters long");
      setUsernameColor("red");
    }

    if (email.includes("@gmail.com")) {
      setErrorEmail("");
      setEmailColor("green");
      setEmail("");
    } else {
      setErrorEmail("Email must contain @gmail.com");
      setEmailColor("red");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
      setPassword("");
    } else {
      setErrorPassword("Password must be atleast 8 characters long");
      setPasswordColor("red");
    }

    if (password == confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
      setConfirmPassword("");
    } else {
      setErrorConfirmPassword("Password didn't match");
      setConfirmPasswordColor("red");
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <form onSubmit={validate}>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: usernameColor }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <p className="error">{errorusername}</p>
          <input
            type="text"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{erroremail}</p>
          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errorpassword}</p>
          <input
            type="password"
            placeholder="Confirm Password"
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{errorconfirmPassword}</p>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Form;
