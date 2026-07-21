import { useEffect } from "react";

function CleanupFunctioninUseEffect() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer Running...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer Stopped");
    };
  }, []);

  return <h2>Timer Component</h2>;
}

export default CleanupFunctioninUseEffect;