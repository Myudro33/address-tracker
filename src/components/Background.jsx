import React, { useEffect } from "react";
import "../App.css";
import patern from "../assets/pattern-bg.png";

const Background = ({ lat, lon }) => {
  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    ifameData.src = `https://maps.google.com/maps?q=
    ${lat},${lon}&hl=es;&output=embed`;
  });
  return (
    <div className="bg-div">
      <img className="bg-img" src={patern} alt="" />
      <div style={{ margin: 0, height: "60%", padding: 0 }}>
        <iframe
          title="nika"
          frameBorder={"none"}
          id="iframeId"
          height="100%"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default Background;
