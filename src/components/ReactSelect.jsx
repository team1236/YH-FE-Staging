import React from "react";
import Select from "react-select";

const TextInput = ({ airports, setData, text }) => {
  return (
    <Select
      className="basic-single"
      placeholder={text}
      classNamePrefix="select"
      name="airport"
      options={airports}
      onChange={(e) => setData(e.value)}
    />
  );
};

export default TextInput;
