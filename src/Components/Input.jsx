import React, { useState } from "react";
import "./../styles.css";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

const Text = (props) => {
  const get = props.get;
  const [city, setcity] = useState("");

  const Hi = () => {
    get(city);
  };

  return (
    <>
      <div
        className="color"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <TextField
          style={{ padding: 24, margin: 45 }}
          id="searchInput"
          placeholder="Enter the City"
          margin="normal"
          onChange={(e) => {
            setcity(e.target.value);
          }}
        />
        <Button variant="contained" color="secondary" onClick={Hi}>
          Click Me..
        </Button>
      </div>
    </>
  );
};

export default Text;
