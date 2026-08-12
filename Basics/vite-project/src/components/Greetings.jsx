const Greetings = ({ timeOfDay }) => {
  return timeOfDay == "morning" ? (
    <p>Good Morning</p>
  ) : timeOfDay == "afternoon" ? (
    <p>Good Afternoon</p>
  ) : (
    ""
  );
};

export default Greetings;
