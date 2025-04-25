import React from "react";
import Reuseme from "./Reuseme";
import listOfData from "../data/weatherCardsData";

export default function CloudCover() {
  return (
    <>
    <Reuseme
      name={listOfData[0].name}
      text={listOfData[0].text}
      img_link={listOfData[0].img_link}
    />
    </>
  );
}
