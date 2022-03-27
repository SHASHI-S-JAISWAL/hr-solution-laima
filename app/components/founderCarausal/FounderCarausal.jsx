import * as React from "react";
import "./style.scss";

const FounderCarausal = (props) => {
  const foundersArray = [
    {
      id: "1",
      name: "facebook",
      url: "https://i.guim.co.uk/img/media/a49b541c86c50ffc9a183cd3894431950037b383/0_150_4500_2700/master/4500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6aaf409397b1e4d4a45d13b7bd489a41",
      message:
        "Dr. Gerhart has spent her whole academic career researching and writing about African resistance to apartheid and has published extensively about the liberation struggle. She originally got interested in South Africa when she was in the 8th grade at Brearley; there was a South African exchange student in the 12th grade, and she became fascinated with her stories about living in Africa. ",
      img: "facebook_icon.png",
    },
    {
      id: "2",
      name: "instagram",
      url: "https://i.guim.co.uk/img/media/a49b541c86c50ffc9a183cd3894431950037b383/0_150_4500_2700/master/4500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6aaf409397b1e4d4a45d13b7bd489a41",
      message:
        "Dr. Gerhart has spent her whole academic career researching and writing about African resistance to apartheid and has published extensively about the liberation struggle. She originally got interested in South Africa when she was in the 8th grade at Brearley; there was a South African exchange student in the 12th grade, and she became fascinated with her stories about living in Africa. ",
      img: "insta_icon.png",
    },
    {
      id: "3",
      name: "linkedin",
      url: "https://i.guim.co.uk/img/media/a49b541c86c50ffc9a183cd3894431950037b383/0_150_4500_2700/master/4500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6aaf409397b1e4d4a45d13b7bd489a41",
      message:
        "Dr. Gerhart has spent her whole academic career researching and writing about African resistance to apartheid and has published extensively about the liberation struggle. She originally got interested in South Africa when she was in the 8th grade at Brearley; there was a South African exchange student in the 12th grade, and she became fascinated with her stories about living in Africa. ",
      img: "linkedin_icon.png",
    },
  ];
  return (
    <div className="founderCorner">
      <div className="title mgb-10 bold font-32 caps ">Features</div>
      <div className="founderWrapper">
        {foundersArray.map((i) => (
          <div className="founderTile">
            <img class="socImg" alt="" src={i.url}></img>
            {i.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FounderCarausal;
