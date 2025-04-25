import React from "react";
import Reuseme from "./Reuseme";
import listOfData from "../data/weatherCardsData";

export default function ColdTemperature() {
  return (
    <>
      <Reuseme
        name={listOfData[3].name}
        text={listOfData[3].text}
        img_link={listOfData[3].img_link}
      />
    </>
  );
}
