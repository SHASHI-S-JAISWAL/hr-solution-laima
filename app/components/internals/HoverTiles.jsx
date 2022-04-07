import React, { useState } from 'react';
import './internal.scss';
import background from '../../assets/why-rays.png';

const HoverTiles = () => {
  const tilesArray = [
    {
      id: 0,
      title: `Ranked 2nd for Times Best School in Patna by TIMES ONLINE EDUCATION SURVEY 
      (BISHOP SCOTT GIRLS' SCHOOL)`,
      text: 'we are a school that has rigorous arts education',
    },
    {
      id: 1,
      title: ` Bihar Excellence Award 2022 by Dainik Jagran and inext
      (BISHOP SCOTT GROUP) `,
      text: 'we are a school that has rigorous arts education',
    },
    {
      id: 2,
      title: `Ranked 5th in Patna, Top Schools of India by digital LEARNING India.
      (BISHOP SCOTT GIRLS' SCHOOL)`,
      text: 'we are a school that has rigorous arts education',
    },
    {
      id: 3,
      title: `Third highest number of registrations in IQL 2020, Indiannica Quiz League 
      (BISHOP SCOTT BOYS' SCHOOL)`,
      text: 'we are a school that has rigorous arts education',
    },
  ];
  const [Selected, setSelected] = useState(null);
  const tile = (t, indx) => (
    <div
      // onMouseOver={() => setSelected(t.id)}
      // onMouseLeave={() => setSelected(null)}
      className={`hover-tile num-${indx}`}
    >
      <div className="text bold font-16 ">
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
          AWARDS <br />
          AND <br />
          ACCREDITATIONS
        </div>
      </div>
      <div className="tile-col">
        {tilesArray.slice(2, 4).map((i, indx) => tile(i, indx + 2))}
      </div>
    </div>
  );
};

export default HoverTiles;
