const Greeting = () => {
  const nameA = "Abdullah";
  const date = new Date();
  return (
    <div>
      <h1>{nameA}</h1>
      <p>Date: {date.getDate()}</p>
    </div>
  );
};

export default Greeting;
