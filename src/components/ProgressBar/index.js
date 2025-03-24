import { useEffect, useState } from "react";

const ProgressBar = () => {
 
    const [timer, setTimer] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const addProgress = () => {
        if (intervalId) return; // Prevent multiple intervals
    
        const id = setInterval(() => {
          setTimer((prevTimer) => {
            if (prevTimer >= 100) {
              clearInterval(id); // Stop at 100%
              return 100;
            }
            return prevTimer + 1;
          });
        }, 10);
    
        setIntervalId(id);
      };
    
      useEffect(() => {
        return () => clearInterval(intervalId); // Cleanup on unmount
      }, [intervalId]);

      
    const reset = () => {
        clearInterval(intervalId);
        setIntervalId(null);
        setTimer(0);
    };

    {
        return (
            <>
            <progress id="file" value={timer} max="100">
            {" "}
            {timer}{" "}
          </progress>

            <br />
          <button onClick={() => addProgress()}>Add</button>
          <button onClick={() => reset()}>Reset</button>
            </>
        )
    }
}
    
    export default ProgressBar;