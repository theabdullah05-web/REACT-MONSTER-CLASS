const Weather = ({ temp }) => {
  {
    if (temp < 15) {
      return <p>Its cold outside</p>;
    } else if (temp > 15 && temp < 25) {
      return <p>Its nice outside</p>;
    } else {
      return <p>Its hot outside</p>;
    }
  }
};

export default Weather;
