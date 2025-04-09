import "./styles.css";
import { useEffect, useState } from "react";
import Accordion from "./components/Accordion";
import ProgressBar from "./components/ProgressBar";
import DataGrid from "./components/DataGrid";
import Modal from "./components/Modal";
import ImgCaraousel from "./components/ImgCaraousel";
import TransferList from "./components/TransferList";
import DropDown from "./components/FormFields/DropDown";
import MultiSelect from "./components/FormFields/MultiSelect";
import users from "./data/users.json";
import images from "./data/images.json";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedValue, setSelectedValue] = useState("Option 1");
  const options = ["Option 1", "Option 2", "Option 3"];

  const allOptions = ["React", "Vue", "Angular", "Svelte"];
  const [selected, setSelected] = useState([]);

  const handleInputChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox {selectedValue}</h1>
      {/* <Accordion  />
        <ProgressBar /> */}
      {/* <DataGrid users={users}/>
        <Modal 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)} 
          title={"Modal Title"}
          children={"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections."}
        />
        <button onClick={() => setIsOpen(true)}>Show modal</button> */}
      {/* <ImgCaraousel images={images}/> */}
      <DropDown
        options={options}
        selectedValue={selectedValue}
        handleChange={handleInputChange}
      />

      <MultiSelect
        options={allOptions}
        selectedValues={selected}
        handleChange={setSelected}
      />
      <div>Selected: {selected.join(", ")}</div>
    </div>
  );
}
