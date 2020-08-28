import React, { useState } from "react";
import "./styles.css";

import Input from "./Components/Input";
import Analog from "./Components/Analog";

const App = () => {
  const [city, setcity] = useState("");

  const get = (props) => {
    setcity(props);
  };

  return (
    <>
      <div className="clock">
        <Input get={get} />

        {city ? <Analog city={city} /> : <h1>Loading</h1>}
      </div>
    </>
  );
};

export default App;
