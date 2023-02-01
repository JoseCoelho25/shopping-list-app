import React, { useState, useEffect } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>
    {time}
    </div>
    ;
}

export default CurrentTime;
