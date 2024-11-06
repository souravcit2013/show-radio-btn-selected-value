import {} from "react";

const Checkbox = ({ items = [], name, handleChange }) => {
  return (
    <>
      {items.map((item) => (
        <>
          <label>{item}</label>
          <input
            key={item}
            type="radio"
            name={name}
            value={item}
            onChange={handleChange}
          />
        </>
      ))}
    </>
  );
};

export default Checkbox;
