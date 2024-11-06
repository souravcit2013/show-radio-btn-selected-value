import { useState } from "react";
import Checkbox from "./Checkbox";

const CheckboxContainer = () => {
  const games = ["cricket", "football"];
  const days = ["week-day", "week-end"];
  const [selectedItems, setSelectItems] = useState({});
  const handleChange = (e) => {
    setSelectItems((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Checkbox items={games} name="games" handleChange={handleChange} />
      <br />
      <h2>Game selected: {selectedItems["games"]}</h2>
      <br />
      <br />
      <Checkbox items={days} name="days" handleChange={handleChange} />
      <br />
      <h2>Day selected: {selectedItems["days"]}</h2>
    </>
  );
};

export default CheckboxContainer;
