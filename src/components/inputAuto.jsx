import React, { useState } from "react";

export default function InputAuto({
  label,
  pholder,
  data,
  onSelected,
  onChange,
  className
}) {
  const [suggestions, setSugesstions] = useState([]);
  const [isHideSuggs, setIsHideSuggs] = useState(false);
  const [selectedVal, setSelectedVal] = useState("");

  const handler = e => {
    setSugesstions(data.filter(i => i.includes(e.target.value.toUpperCase())));
  };

  const handleChange = e => {
    const input = e.target.value.toUpperCase();
    setIsHideSuggs(false);
    setSelectedVal(input);
    onChange(input);
  };

  const hideSuggs = value => {
    onSelected(value);
    setSelectedVal(value);
    setIsHideSuggs(true);
  };

  return (
    <div className="sugesstion-auto">
      <div className="form-control-auto">
        <label htmlFor="tag-input">{label}</label>
        <input
          placeholder={pholder}
          type="search"
          value={selectedVal}
          onChange={handleChange}
          onKeyUp={handler}
          className={className}
        />
      </div>

      {suggestions.length >0 && suggestions.length < data.length && (
        <div
          className="suggestions flex border p-1 rounded-b-lg text-black bg-white max-w-[700px] w-[80%] mx-auto outline-none"
          style={{ display: isHideSuggs ? "none" : "block" }}
        >
          {suggestions.map((item, idx) => (
            <div
              key={"" + item + idx}
              onClick={() => {
                hideSuggs(item);
              }}
              className="hover:bg-gray-100/90"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
