import { useState } from "react";

const TransferList = () => {
  const [leftList, setLeftList] = useState(["HTML", "JavaScript", "CSS", "TypeScript"]);
  const [rightList, setRightList] = useState(["React", "Angular", "Vue", "Svelte"]);
  const [selectedLeft, setSelectedLeft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);

  // Toggle selection
  const handleSelect = (item, selectedItems, setSelected) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  // Move selected items
  const moveSelected = (fromList, toList, selectedItems, setFromList, setToList, setSelected) => {
    setToList([...toList, ...selectedItems]);
    setFromList(fromList.filter((item) => !selectedItems.includes(item)));
    setSelected([]);
  };

  // Move all items
  const moveAll = (fromList, setFromList, toList, setToList) => {
    setToList([...toList, ...fromList]);
    setFromList([]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        {/* Left List */}
        <div style={styles.listContainer}>
          <h3>Available</h3>
          <ul style={styles.list}>
            {leftList.map((item) => (
              <li key={item} style={styles.listItem}>
                <input
                  type="checkbox"
                  checked={selectedLeft.includes(item)}
                  onChange={() => handleSelect(item, selectedLeft, setSelectedLeft)}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div style={styles.buttonContainer}>
          <button onClick={() => moveSelected(leftList, rightList, selectedLeft, setLeftList, setRightList, setSelectedLeft)}>&gt;</button>
          <button onClick={() => moveAll(leftList, setLeftList, rightList, setRightList)}>&gt;&gt;</button>
          <button onClick={() => moveAll(rightList, setRightList, leftList, setLeftList)}>&lt;&lt;</button>
          <button onClick={() => moveSelected(rightList, leftList, selectedRight, setRightList, setLeftList, setSelectedRight)}>&lt;</button>
        </div>

        {/* Right List */}
        <div style={styles.listContainer}>
          <h3>Selected</h3>
          <ul style={styles.list}>
            {rightList.map((item) => (
              <li key={item} style={styles.listItem}>
                <input
                  type="checkbox"
                  checked={selectedRight.includes(item)}
                  onChange={() => handleSelect(item, selectedRight, setSelectedRight)}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa"
  },
  box: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
  },
  listContainer: {
    padding: "10px",
    minWidth: "150px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "8px",
    fontSize: "16px"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    margin: "0 20px"
  }
};

export default TransferList;
