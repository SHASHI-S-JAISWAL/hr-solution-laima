import React from "react";

const Inquire = (props) => {
  const schoolsArray = [
    {
      id: "1",
      title: "Inquire for Boys School",
      url: "https://bishopscottboysschool.com/web/",
    },
    {
      id: "1",
      title: "Inquire for Girls School",
      url: "http://www.bishopscottschool.com/",
    },
  ];
  return (
    <div className="enquire-wrapper ">
      <div className="title mgb-10 bold font-32 ">
        We Believe in the Power of Girls’ Intellect
      </div>
      <div className="text font-20 lh-30">
        We believe intellectually adventurous, socially engaged girls are our
        best hope for the future. <br />
        We celebrate and cultivate that power and enable girls to grow into
        their authentic selves.
      </div>
      {schoolsArray.map((i) => (
        <div
          className="filler-button mgt-20 caps mgl-20"
          onClick={() => {
            console.log(i.url);
            window.open(i.url, "_blank");
          }}
        >
          Inquire for Boys School
        </div>
      ))}
    </div>
  );
};

export default Inquire;
