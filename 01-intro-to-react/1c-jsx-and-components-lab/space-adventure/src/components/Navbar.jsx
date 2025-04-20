import React from "react";


function Navbar() {
  const navbar_style = {

    top: "0",
    backgroundColor: "rgb(249, 249, 249)",
    fontSize: "20px",
    color: "rgb(22, 22, 177)",
    textAlign: "center",
    padding: "20px",
    margin: "0",
    width: "100%",
  };
  const ul_style = {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-evenly",
    padding: "0",
    margin: "0",
  };
  const li_style = {
    display: "inline",
    margin: "0 10px",
  };  
  const navbarLists = ["Home", "Blog", "About", "Contact", ];
  return (
  <nav style={navbar_style}>
    <ul style={ul_style}>
      {navbarLists.map((item, index) => {
        return (<li style={li_style} key={index}>{item}</li>)
      })}
    </ul>
  </nav>
  )
}

export default Navbar;
