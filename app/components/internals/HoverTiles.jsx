import React, { useState } from "react";
import "./internal.scss";
import background from "../../assets/why-rays.png";

const HoverTiles = () => {
  const tilesArray = [
    {
      id: 0,
      title: "Rigorous Arts education",
      text: "we are a school that has rigorous arts education",
    },
    {
      id: 1,
      title: "committed",
      text: "we are a school that has rigorous arts education",
    },
    {
      id: 2,
      title: "girls school",
      text: "we are a school that has rigorous arts education",
    },
    {
      id: 3,
      title: "small but big",
      text: "we are a school that has rigorous arts education",
    },
  ];
  const [Selected, setSelected] = useState(null);
  const tile = (t, indx) => (
    <div
      onMouseOver={() => setSelected(t.id)}
      onMouseLeave={() => setSelected(null)}
      className={`hover-tile num-${indx}`}
    >
      <div className="text bold font-30 ">
        {Selected !== t.id ? t.title : t.text}
      </div>
    </div>
  );
  return (
    <div className="tiles-wrapper">
      <div className="tile-col">
        {tilesArray.slice(0, 2).map((i, indx) => tile(i, indx))}
      </div>
      <div
        className="main-tile"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="title caps bold font-30 why-tile">
          why bishop scotts school
        </div>
      </div>
      <div className="tile-col">
        {tilesArray.slice(2, 4).map((i, indx) => tile(i, indx + 2))}
      </div>
    </div>
  );
};

export default HoverTiles;
