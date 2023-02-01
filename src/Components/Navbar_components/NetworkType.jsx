import React, { useState, useEffect } from "react";
import wifi from "../../assets/imgs/wifi.png";

function NetworkType() {
  const [networkType, setNetworkType] = useState(null);

  useEffect(() => {
    if ('connection' in navigator) {
      setNetworkType(navigator.connection.effectiveType);

      navigator.connection.addEventListener('change', () => {
        setNetworkType(navigator.connection.effectiveType);
      });
    }
  }, []);

  return <div className="flex items-center justify-center"><img src={wifi} alt="network"  /> {networkType || "Could not determine"}</div>;
}

export default NetworkType;
