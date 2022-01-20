export default function WeatherIcons(props) {
  const codeMapping = {
    "01d": require("./svg/01d.svg").default,
    "01n": require("./svg/01n.svg").default,
    "02d": require("./svg/02d.svg").default,
    "02n": require("./svg/02n.svg").default,
    "03d": require("./svg/03d.svg").default,
    "03n": require("./svg/03n.svg").default,
    "04d": require("./svg/04d.svg").default,
    "04n": require("./svg/04n.svg").default,
    "09d": require("./svg/09d.svg").default,
    "09n": require("./svg/09n.svg").default,
    "10d": require("./svg/10d.svg").default,
    "10n": require("./svg/10n.svg").default,
    "11d": require("./svg/11d.svg").default,
    "11n": require("./svg/11n.svg").default,
    "13d": require("./svg/13d.svg").default,
    "13n": require("./svg/13n.svg").default,
    "50d": require("./svg/50d.svg").default,
    "50n": require("./svg/50n.svg").default,
  };

  if (props.width === 160) {
    return (
      <img
        src={codeMapping[props.icon]}
        alt={props.icon.description}
        width={160}
      />
    );
  } else {
    return <img src={codeMapping[props.icon]} alt={props.icon.description} />;
  }
}
