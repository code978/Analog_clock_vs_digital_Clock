import React, { useState } from "react";
import "./../styles.css";
import AnalogClock from "analog-clock-react";
import cityTimezones from "city-timezones";

const Clock = ({ city }) => {
  const cityLookup = cityTimezones.lookupViaCity(city);
  const timezone = cityLookup[0].timezone;

  const [hours, sethours] = useState(
    new Date().getHours("en-Us", { timeZone: timezone })
  );
  const [min, setmin] = useState(
    new Date().getMinutes("en-US", { timezone: timezone })
  );
  const [sec, setsec] = useState(
    new Date().getSeconds("en-US", { timeZone: timezone })
  );

  setInterval(() => {
    sethours(new Date().getHours());
    setmin(new Date().getMinutes());
    setsec(new Date().getSeconds());
  }, 1000);

  let options = {
    width: "300px",
    centerColor: "#459cff",

    handColors: {
      second: "#d81c7a",
      minute: "#ffc93c",
      hour: "#ee6f57"
    },
    seconds: sec, // set your
    minutes: min, // own
    hours: hours // time here.
  };

  return (
    <>
      <h1 style={{ color: "white" }}>{city}</h1>
      <AnalogClock {...options} />
    </>
  );
};

export default Clock;
