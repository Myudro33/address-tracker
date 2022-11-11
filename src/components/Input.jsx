import React from "react";
import "../App.css";
import { Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const Input = ({ setdata }) => {
  const [value, setvalue] = useState("");
  const getData = async () => {
    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_GEOLOCATION_API_KEY}&ipAddress=${value}`
    );
    setdata({
      isp: response.data.isp,
      city:response.data.location.city,
      region: response.data.location.region,
      lat: response.data.location.lat,
      lon: response.data.location.lng,
      timeZone:response.data.location.timezone,
      ip:response.data.ip
    });
  };
  return (
    <div className="input-div">
      <Typography variant="h4" color={"white"} fontWeight={700} component="h1">
        IP Address Tracker
      </Typography>
      <Box
        sx={{
          width: "100%",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          id="filled-hidden-label-small"
          label="Enter IP Address"
          variant="outlined"
          color="success"
          size="normal"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          sx={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        />
        <Button onClick={getData} variant="contained" color="success">
          Search
        </Button>
      </Box>
    </div>
  );
};

export default Input;
