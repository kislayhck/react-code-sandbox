import "./styles.css";
import axios from "axios"
import { useEffect, useState } from "react";

export default function App() {

  const [data, setData] = useState([]);
  const [expandedIds, setExpandedIds] = useState([]);
  const [timer,setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);


  const getData = async () => {
    const datas = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setData(datas.data);
  }


  useEffect(() => {
    getData();
  },[])

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


  const toggleExpand = (id) => {
    setExpandedIds((prevExpandedIds) =>
      prevExpandedIds.includes(id)
        ? prevExpandedIds.filter((expandedId) => expandedId !== id) // Remove if already expanded
        : [...prevExpandedIds, id] // Add if not expanded
    );
  };

  const reset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTimer(0);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/* <div>
        {data.map((item) => (
          <div key={item.id} style={{ border: "1px solid", padding: "10px", marginBottom: "10px" }}>
            <h3 onClick={() => toggleExpand(item.id)} style={{ cursor: "pointer" }}>
              {item.title} {expandedIds.includes(item.id) ? ">>" : "<<"}
            </h3>
            {expandedIds.includes(item.id) && <div>{item.body}</div>}
          </div>
        ))}
      </div> */}

      <progress id="file" value={timer} max="100"> {timer} </progress>

      <br />
      
      <button onClick={() => addProgress()}>Add</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
