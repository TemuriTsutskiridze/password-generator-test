import "./container.css";
import arrowImg from "../../assets/icon-arrow-right.svg";
import { useEffect, useState } from "react";

const data = [
  "Include Uppercase Letters",
  "Include Lowercase Letters",
  "Include Numbers",
  "Include Symbols",
];

const Container = () => {
  const [rangeValue, setRangeValue] = useState(10);
  const [strength, setStrength] = useState(0);

  const rangeHandler = (e) => {
    setRangeValue(e.target.value);
  };

  function handleChange(e) {
    if (e.target.checked) {
      setStrength((prev) => prev + 1);
    } else {
      setStrength((prev) => prev - 1);
    }
  }

  useEffect(() => {
    console.log(strength);
  }, [strength]);

  return (
    <div className="main">
      <div className="text-number">
        <h2 className="character-length">Character Length</h2>
        <h1 className="numbers">{rangeValue}</h1>
      </div>
      <input
        className="range"
        type="range"
        max={20}
        onChange={rangeHandler}
        value={rangeValue}
      />
      <div className="boxes">
        {data.map((item, index) => {
          return (
            <div className="container-box" key={index}>
              <input
                type="checkbox"
                className="checkbox"
                onChange={handleChange}
              />
              <div className="custom-checkbox"></div>
              <h2 className="text">{item}</h2>
            </div>
          );
        })}
      </div>
      <div className="dark-box">
        <h2 className="strength">STRENGTH</h2>
        <div className="text-and-scale">
          <h2 className="scale"></h2>
          <div
            className={`colored-boxes ${strength === 1 ? "a" : undefined}`}
          ></div>
          <div className="colored-boxes b"></div>
          <div className="colored-boxes c"></div>
          <div className="colored-boxes d"></div>
        </div>
      </div>
      <button className="generate-part">
        GENERATE
        <svg
          className="icon-arrow"
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#24232C"
            d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          />
        </svg>
      </button>
    </div>
  );
};
export default Container;
