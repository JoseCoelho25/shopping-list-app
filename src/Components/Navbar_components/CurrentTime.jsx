import React, { useState, useEffect } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    },[]);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className="flex items-center">
    {time}
    </div>
    ;
}

export default CurrentTime;
