import React from "react";
import Reuseme from "./Reuseme";
import listOfData from "../data/weatherCardsData";

export default function Rain() {
  return (
    <>
      <Reuseme
        name={listOfData[1].name}
        text={listOfData[1].text}
        img_link={listOfData[1].img_link}
      />
    </>
  );
}
