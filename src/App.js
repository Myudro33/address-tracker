import React, { useEffect, useState } from "react";
import Background from "./components/Background";
import Info from "./components/Info";
import Input from "./components/Input";

const App = () => {
  const [lat, setlat] = useState(41.7151);
  const [lon, setlon] = useState(44.8271);
  const [data, setdata] = useState({
    ip: "80.92.177.40",
    isp: "Railway Telecom, Ltd",
    lat: 41.71667,
    lon: 44.75,
    region: "K'alak'i T'bilisi",
    city:'Saburtalo',
    timeZone: "+04:00",
  });
  useEffect(() => {
    setlat(data.lat)
    setlon(data.lon)
  }, [data])
  return (
    <div style={{display:'flex',justifyContent:'center'}} >
      <Input setdata={setdata} />
      <Info data={data} />
      <Background lat={lat} lon={lon} />
    </div>
  );
};

export default App;
