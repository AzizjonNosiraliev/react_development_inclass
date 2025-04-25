import React from "react";
import Reuseme from "./Reuseme";
import listOfData from "../data/weatherCardsData";

export default function HotTemperature(props) {
  return (
    <>
      <Reuseme
        name={listOfData[2].name}
        text={listOfData[2].text}
        img_link={listOfData[2].img_link}
      />
    </>
  );
}
