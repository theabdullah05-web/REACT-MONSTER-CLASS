// import User from "./components/User";

import Button from "./components/Button";

export default function App() {
  // return <User name="Abdullah" age={21} isStudent={true} />;
  // return (
  //   <User>
  //     <p>Abdullah is here</p>
  //   </User>
  // );
  let onclick = () => {
    alert("Button was clicked");
  };
  let nothing = () => {};
  return (
    <>
      <Button label="Click Me" disabled={false} onClick={onclick} />
      <Button label="Disabled" disabled={true} onClick={nothing} />
    </>
  );
}
