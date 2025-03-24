import { useEffect, useState } from "react";
import axios from "axios";

const Accordion = () => 
{
  const [data, setData] = useState([]);
  const [expandedIds, setExpandedIds] = useState([]);

  const getData = async () => {
    const datas = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setData(datas.data);
  };

  useEffect(() => {
    getData();
  }, []);



  const toggleExpand = (id) => {
    setExpandedIds(
      (prevExpandedIds) =>
        prevExpandedIds.includes(id)
          ? prevExpandedIds.filter((expandedId) => expandedId !== id) // Remove if already expanded
          : [...prevExpandedIds, id] // Add if not expanded
    );
  };

    return (
        data.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h3
                onClick={() => toggleExpand(item.id)}
                style={{ cursor: "pointer" }}
              >
                {item.title} {expandedIds.includes(item.id) ? ">>" : "<<"}
              </h3>
              {expandedIds.includes(item.id) && <div>{item.body}</div>}
            </div>
          ))
    )
}

export default Accordion;