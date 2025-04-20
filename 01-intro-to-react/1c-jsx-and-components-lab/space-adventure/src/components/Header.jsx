import React from "react";

function Header() {
  const header_style = {
    backgroundImage: "url('/stars.jpg')",
    backgroundSize: "cover",
    color: "white",
    textAlign: "center",
    padding: "0",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    top: "30px",
  };
  const img_style = {
    width: "100%",
    height: "200px",
  };

  return (
    <header style={header_style}>
      <h1>Space Adventure Blog</h1>
      
    </header>
  );
}

export default Header;
