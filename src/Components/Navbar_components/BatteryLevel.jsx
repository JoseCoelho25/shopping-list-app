import React, { useState, useEffect } from "react";
import battery from "../../assets/imgs/battery.png";

function BatteryLevel() {
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    if ('getBattery' in navigator) {
      navigator.getBattery().then(battery => {
        setBatteryLevel(battery.level * 100 + "%");

        battery.addEventListener('levelchange', () => {
          setBatteryLevel(battery.level * 100 + "%");
        });
      });
    }
  }, []);

  return <div className="flex items-start justify-center"> <img src={battery} alt="bat"  />{batteryLevel || "Could not determine"}</div>;
}

export default BatteryLevel;
